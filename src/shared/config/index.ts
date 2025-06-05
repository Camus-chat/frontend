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

export const MEATADATA = {
  title: 'CAMUS',
};

export const TUTORIAL_CHAT_MEMBER_ID = {
  ai: 'tutorial-ai',
  user: 'tutorial-user',
};

export const FILTERING_API_BASE_URL =
  process.env.NEXT_PUBLIC_FILTERING_API_BASE_URL;

export const FILTERING_PREDICTION = {
  abuse: 0,
  harassment: 1,
  neutral: 2,
};
