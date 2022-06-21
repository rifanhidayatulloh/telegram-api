require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 4000,
  APP_NAME: process.env.APP_NAME || 'Telegram',
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_URL: process.env.API_URL,
  APP_CLIENT: process.env.APP_CLIENT,

  // database
  PG_HOST: process.env.PG_HOST,
  PG_USER: process.env.PG_USER,
  PG_PASSWORD: process.env.PG_PASSWORD,
  PG_DATABASE: process.env.PG_DATABASE,
  PG_PORT: process.env.PG_PORT,
  // jwt
  JWT_SECRET: process.env.JWT_SECRET,

  // google
  EMAIL_FROM: process.env.EMAIL_FROM,
  EMAIL_USER: process.env.EMAIL_USER,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  REDIRECT_URI: process.env.REDIRECT_URI,
  GMAIL_REFRESH_TOKEN: process.env.GMAIL_REFRESH_TOKEN,

  // email
  // GMAIL_USER: process.env.GMAIL_USER,
  // GMAIL_PASS: process.env.GMAIL_PASS,
  // EMAIL_SENDER: process.env.EMAIL_SENDER,
  //api
  APP_URL: process.env.APP_URL,
  // APP_CLIENT: process.env.APP_CLIENT,
};
