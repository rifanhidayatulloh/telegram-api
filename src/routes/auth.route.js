const express = require('express');

const {
  registerValidation,
  loginValidation,
  // forgotValidation,
  // resetValidation,
} = require('../validations/auth.validation');
const validation = require('../middlewares/validation');
const {
  register,
  login,
  verifyEmail,
} = require('../controllers/auth.controller');

const router = express.Router();

router
  .get('/auth/activation', verifyEmail)
  .post('/register', registerValidation, validation, register)
  .post('/login', loginValidation, validation, login);

module.exports = router;
