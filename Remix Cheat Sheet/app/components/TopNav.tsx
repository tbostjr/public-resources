/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';

import { useCookies } from 'react-cookie';
import { Avatar, Box, Button, ButtonGroup } from '@mui/material';
import {
  AccountCircle as LoginIcon,
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  Notes as NotesIcon,
  Note,
  Public,
  Add,
} from '@mui/icons-material';
import { ActionFunctionArgs, LoaderFunctionArgs, redirect } from '@remix-run/node';
import { userInfo } from 'JS/cookies.server';
import { useLoaderData, useSubmit } from '@remix-run/react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TopNav(data: any) {
  const submit = useSubmit();
  const cookieData = data.cookieData;

  const logout = () => {
    submit({}, { method: 'post' });
  };

  let loginButton, dashboardButton;
  if (cookieData.username) {
    loginButton = (
      <Button className='icon-button' onClick={logout}>
        <Avatar src={cookieData.image}></Avatar>
        <p>{cookieData.username}</p>
      </Button>
    );
    dashboardButton = (
      <a href='/dashboard/settings'>
        <Button variant='contained' color='primary' className='icon-button'>
          Dashboard
        </Button>
      </a>
    );
  } else {
    loginButton = (
      <a href='/login'>
        <Button className='icon-button'>
          <LoginIcon></LoginIcon>
          <p>Login</p>
        </Button>
      </a>
    );
  }

  return (
    <div>
      <div id='topNav'>
        <Box>
          <a href='/'>
            <Button className='icon-button'>
              <Add></Add>
              <p>App Name</p>
            </Button>
          </a>
          <a href='/public'>
            <Button className='icon-button'>
              <p>Button1</p>
            </Button>
          </a>
          <a href='/releasenotes'>
            <Button className='icon-button'>
              <p>Button 2</p>
            </Button>
          </a>
        </Box>
        <Box>
          {dashboardButton}
          {loginButton}
        </Box>
      </div>
    </div>
  );
}

export default TopNav;
