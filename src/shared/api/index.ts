import { auth } from './auth';
import { client } from './client';
import { server } from './server';

export const api = {
  auth: auth.post,
  clientSide: client,
  serverSide: server,
};
