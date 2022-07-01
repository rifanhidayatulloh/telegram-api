const db = require('../config/db');

const authModel = {
  loginData: (email) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT password, is_active FROM users WHERE email='${email}'`,
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  },
  registerData: (data) => {
    return new Promise((resolve, reject) => {
      const {
        id,
        fullname,
        email,
        passwordHashed,
        isVerified,
        isActive,
        photo,
        verifyToken
      } = data;
      db.query(
        `INSERT INTO users(id, email, password, is_active, is_verified, photo, fullname, verify_token)
        VALUES('${id}', '${email}', '${passwordHashed}', ${isActive}, ${isVerified}, '${photo}', '${fullname}', '${verifyToken}')`,
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  },
  emailCheck: (email) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE email='${email}'`, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
  verifyTokenCheck: (verifyToken) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM users WHERE verify_token='${verifyToken}'`,
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  },
  verifyingUser: (verifyToken) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE users SET is_verified=1, is_active=1, verify_token=null WHERE verify_token='${verifyToken}'`,
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  },
  updateToken: (verifyToken, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE users SET verify_token=$1 WHERE id=$2`,
        [verifyToken, id],
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  },
  resetPassword: (password, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE users SET password=$1 WHERE id=$2`,
        [password, id],
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  },
};
module.exports = authModel;
