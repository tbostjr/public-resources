//React/Remix Imports
import React from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { ActionFunctionArgs, LinksFunction, LoaderFunctionArgs } from '@remix-run/node';
import { Outlet, useActionData, useLoaderData, useSubmit } from '@remix-run/react';

//Material Imports
import { Box } from '@mui/material';

//Icon Imports

//File Imports
import appStyle from '';
import pageStyle from '';
import {} from 'interfaces';

//#region Remix Functions
export const links: LinksFunction = () => {
  // `links` returns an array of objects whose
  // properties map to the `<link />` component props
  return [
    { rel: 'stylesheet', href: appStyle },
    { rel: 'stylesheet', href: pageStyle },
  ];
};

export async function loader({ request, params }: LoaderFunctionArgs) {
  const returnData = {};
  return returnData || null;
}
export async function action({ request, params }: ActionFunctionArgs) {
  const returnData = {};
  return returnData || null;
}

//#endregion

export default function Component() {
  //#region Globals
  //Loader & Action Data
  const {}: any = useLoaderData<typeof loader>();
  //States & Refs

  //Variables

  //#endregion

  //#region Functions

  //#endregion

  //#region Linear

  //#endregion
  return (
    <div>
      <></>
    </div>
  );
}
