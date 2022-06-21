const { check } = require('express-validator');

const workerValidation = [
  // fullname
  check('fullname', 'fullname cannot be empty').not().isEmpty(),
  check('fullname', 'fullname require 3 or more characters').isLength({
    min: 3,
  }),

  // bio
  check('bio', 'bio cannot be empty').not().isEmpty(),
  check('bio', 'bio require 5 or more characters').isLength({
    min: 5,
  }),

  // phone
  check('phone', 'phone cannot be empty').not().isEmpty(),
  check('phone', 'phone require 10 or more characters').isLength({
    min: 10,
  }),

  // username
  check('username', 'username cannot be empty').not().isEmpty(),
  check('username', 'username require 3 or more characters').isLength({
    min: 3,
  }),
];

const isActiveValidation = [
  // is active
  check('status', 'status cannot be empty').not().isEmpty(),
  check('status', 'status only number 0 or 1').isNumeric(),
  check('status', 'status value must be between 0 to 1').isInt({
    min: 0,
    max: 1,
  }),
];

module.exports = { workerValidation, isActiveValidation };
