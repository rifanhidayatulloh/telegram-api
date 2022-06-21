const express = require('express');
const {
  listAllUser,
  updateProfile,
  updatePhoto,
  getDetail,
} = require('../controllers/user.controller');
const { workerValidation } = require('../validations/user.validation');
const validation = require('../middlewares/validation');
const jwtAuth = require('../middlewares/jwtAuth');
const upload = require('../middlewares/upload');

const router = express.Router();

router
  .get('/users', jwtAuth, listAllUser)
  .get('/users/:id', jwtAuth, getDetail)
  .put(
    '/users/update/profile',
    jwtAuth,
    workerValidation,
    validation,
    updateProfile
  )
  .put('/users/update/photo', jwtAuth, upload, updatePhoto);

module.exports = router;
