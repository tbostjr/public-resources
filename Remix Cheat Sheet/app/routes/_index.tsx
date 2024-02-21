import type { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import appStyle from '../styles/App.css';
import homeStyle from '../styles/home.css';
import { Box } from '@mui/material';
import { } from '@mui/icons-material';
import React from 'react';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export const links: LinksFunction = () => {
  // `links` returns an array of objects whose
  // properties map to the `<link />` component props
  return [
    { rel: 'stylesheet', href: appStyle },
    { rel: 'stylesheet', href: homeStyle },
  ];
};
export async function loader({ request }: LoaderFunctionArgs) {
  const returnData = {
  };
  return returnData || null;
}

export default function Index() {
  
  return (
    <main></main>
  );
}
