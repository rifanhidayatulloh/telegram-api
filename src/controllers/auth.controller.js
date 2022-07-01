const { success, failed } = require('../helpers/response');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');
const authModel = require('../models/auth.model');
// const sendEmail = require('../helpers/sendEmail');
const sendEmail = require('../utils/sendEmail');
const jwtToken = require('../helpers/generateJWTtoken');
const { APP_NAME, EMAIL_FROM, API_URL, APP_CLIENT } = require('../helpers/env');
const activateAccount = require('../template/confirm-email');

module.exports = {
  register: async (req, res) => {
    try {
      let { fullname, email, password } = req.body;
      const emailCheck = await authModel.emailCheck(email);
      // for check email
      if (emailCheck.rowCount > 0) {
        const err = {
          message: 'Email is already exist',
        };
        failed(res, {
          code: 500,
          status: 'error',
          message: err.message,
          error: [],
        });
        return;
      }
      const id = uuidv4();
      const passwordHashed = await bcrypt.hash(password, 10);
      const verifyToken = crypto.randomBytes(64).toString('hex');
      const isVerified = 0;
      const isActive = 0;
      const photo = 'profile-default.png';

      const data = {
        id,
        fullname,
        email,
        passwordHashed,
        isVerified,
        isActive,
        photo,
        verifyToken
      };

      // insert data
      const out = await authModel.registerData(data);
      // sendEmail.sendConfirmationEmail(email, verifyToken, fullname);

      // send email for activate account
      const templateEmail = {
        from: `"${APP_NAME}" <${EMAIL_FROM}>`,
        to: req.body.email.toLowerCase(),
        subject: 'Activate Your Account!',
        html: activateAccount(
          `${API_URL}auth/activation?token=${verifyToken}`,
          fullname
        ),
      };
      sendEmail(templateEmail);

      success(res, {
        code: 200,
        status: 'success',
        message: 'create user sucesss, please activate your email',
        data: data,
        paggination: [],
      });
    } catch (error) {
      failed(res, {
        code: 500,
        status: 'failed',
        message: error.message,
        error: [],
      });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const emailCheck = await authModel.emailCheck(email);
      // cek apakah sudah register?
      if (emailCheck.rowCount >= 1) {
        // cek apakah sudah veifikasi email
        if (emailCheck.rows[0].verify_token === null) {
          // cek apakah akun active?
          if (emailCheck.rows[0].is_active == 1) {
            bcrypt
              .compare(password, emailCheck.rows[0].password)
              .then(async (match) => {
                // compare berhasil?
                if (match) {
                  // login sukses dan memberi token
                  const token = await jwtToken(emailCheck.rows[0]);
                  success(res, {
                    code: 200,
                    status: 'success',
                    message: 'login success',
                    data: emailCheck.rows[0].id,
                    token: token,
                  });
                } else {
                  // login gagal
                  const err = {
                    message: 'wrong email or password',
                  };
                  failed(res, {
                    code: 500,
                    status: 'error',
                    message: err.message,
                    error: [],
                  });
                }
              });
          } else {
            const err = {
              message: 'your account is disabled',
            };
            failed(res, {
              code: 500,
              status: 'error',
              message: err.message,
              error: [],
            });
          }
        } else {
          const err = {
            message: 'e-mail is not verified',
          };
          failed(res, {
            code: 500,
            status: 'error',
            message: err.message,
            error: [],
          });
        }
      } else {
        const err = {
          message: 'email not registered',
        };
        failed(res, {
          code: 500,
          status: 'error',
          message: err.message,
          error: [],
        });
      }
    } catch (error) {
      failed(res, {
        code: 500,
        status: 'error',
        message: error.message,
        error: [],
      });
    }
  },
  verifyEmail: async (req, res) => {
    const { token } = req.query;
    // console.log(token);
    const verifyTokenCheck = await authModel.verifyTokenCheck(token);
    if (verifyTokenCheck.rowCount > 0) {
      authModel
        .verifyingUser(token)
        .then((result) => {
          return res.send(`
          <div>
          <h1>Activation Success!</h1>
          <h3>You can login now!</h3>
          </div>
          `);
        })
        .catch((err) => {
          console.log(err);
          failed(res, {
            code: 500,
            status: 'error',
            message: err.message,
            error: [],
          });
        });
      // success(res, {
      //   code: 200,
      //   status: 'Success',
      //   message: 'Verify Email Success',
      //   data: [],
      // });
    } else {
      const err = {
        message: 'verify token is invalid',
      };
      failed(res, {
        code: 500,
        status: 'error',
        message: err.message,
        error: [],
      });
    }
  },
};
