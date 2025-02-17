import { auth } from './auth';
import { client } from './client';
import { get } from './server';

export const callAPI = {
  auth: auth.post,
  clientSide: client,
  serverSide: { get },
};
