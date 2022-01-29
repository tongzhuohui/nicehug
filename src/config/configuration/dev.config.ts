'use strict';

const MONGODB_URI = 'mongodb://127.0.0.1:27017/blogapi';

const QINIU = {
  accessKey: 'your_qn_accessKey',
  secretKey: 'your_qn_secretKey',
  bucket: 'blog',
  origin: 'http://blog.u.qiniudn.com',
  uploadURL: 'http://up.qiniu.com/',
};

const USER = {
  jwtToken: 'naice_blog',
  username: 'naice',
  password: '123456',
};

export type USER_TYPE = typeof USER;

const EMAIL = {
  service: 'QQ',
  account: 'your_email_account',
  password: 'your_email_password',
};

const BAIDU = {
  site: 'your_baidu_site',
  token: 'your_baidu_token',
};

const APP = {
  LIMIT: 10,
  PORT: 8000,
};

const INFO = {
  name: 'naice blog',
  version: '1.0.0',
  author: 'naice',
  site: 'https://blog.naice.me',
  powered: ['Vue2', 'Nuxt.js', 'Node.js', 'MongoDB', 'koa', 'Nginx'],
};

const CONFIG = {
  MONGODB_URI,
  QINIU,
  USER,
  EMAIL,
  BAIDU,
  APP,
  INFO,
};

export default () => CONFIG;