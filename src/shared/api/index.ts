import { auth } from './auth';
import { client } from './client';
import serverSide from './server';

export const callAPI = {
  auth: auth.post,
  clientSide: client,
  serverSide,
};
