/* eslint-disable @typescript-eslint/no-explicit-any */
import { createCookie, isCookie } from '@remix-run/node';
import config from 'config';
import { Cookie } from './interfaces';

export const userInfo = createCookie('userInfo', { maxAge: 2000000, secrets: [config.get('auth.secret')] });

export const checkCookie = async (cookieHeader: any) => {
  let returnValue: Cookie | null;
  if (userInfo.isSigned && isCookie(userInfo)) {
    returnValue = await userInfo.parse(cookieHeader);

  } else {
    returnValue = null;
  }
  return returnValue;
};
