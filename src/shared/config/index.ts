export const { BACKEND_INTERNAL_URL } = process.env;

export const DOMAIN_NAME = process.env.NEXT_PUBLIC_DOMAIN_NAME;
export const BIZ_DOMAIN_NAME = process.env.NEXT_PUBLIC_BIZ_DOMAIN_NAME;
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const BIZ_PATH = process.env.NODE_ENV === 'development' ? '/biz' : '/';

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;

export const ACCESS_TOKEN = 'a-t';

export const ROUTE = {
  login: '/signin',
  signup: '/signup',
  chat: '/service/chat',
  channel: '/service/channel',
  profile: '/service/profile',
  guest: '/chat',
};
