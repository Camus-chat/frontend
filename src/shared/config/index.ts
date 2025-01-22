export const { BASE_URL, NODE_ENV, DOMAIN_NAME, BIZ_DOMAIN_NAME } = process.env;

export const BIZ_PATH = NODE_ENV === 'development' ? '/biz' : '/';
