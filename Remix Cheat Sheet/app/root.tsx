import { cssBundleHref } from '@remix-run/css-bundle';
import { ActionFunctionArgs, LinksFunction, LoaderFunctionArgs, redirect } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
import TopNav from './components/TopNav';
import { userInfo } from 'JS/cookies.server';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#E66A00',
    },
    secondary: {
      main: '#b5b5b5',
    },
    text: {
      secondary: '#ffab40',
      primary: '#b5b5b5',
    },
    background: {
      default: '#353535',
      paper: '#181818',
    },
    divider: '#ff6d00',
  },
});

export const links: LinksFunction = () => [...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : [])];
export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await userInfo.parse(cookieHeader)) || {};
  return cookie;
}

export default function App() {
  const cookieData = useLoaderData<typeof loader>();

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <TopNav cookieData={cookieData}></TopNav>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </ThemeProvider>
      </body>
    </html>
  );
}
