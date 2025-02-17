import { auth } from './auth';
import { client } from './client';

export const api = {
  auth: auth.post,
  clientSide: client,
};
