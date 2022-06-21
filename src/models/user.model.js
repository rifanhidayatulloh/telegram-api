const db = require('../config/db');

const userModel = {
  getCountUsers: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT COUNT(*) AS total FROM users WHERE is_active=1`,
        (err, result) => {
          if (err) {
            reject(new Error(err.message));
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  selectAllUsers: (sortByField, sortByType, getLimit, offset, getSearch) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM users WHERE (fullname ILIKE '%${getSearch}%' AND is_active=1) ORDER BY ${sortByField} ${sortByType} LIMIT ${getLimit} OFFSET ${offset}`,
        (err, result) => {
          if (err) {
            reject(new Error(err.message));
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  getDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE id='${id}'`, (err, result) => {
        if (err) {
          reject(new Error(err.message));
        } else {
          resolve(result);
        }
      });
    });
  },
  updateProfile: (fullname, bio, phone, username, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE users SET fullname='${fullname}', bio='${bio}', phone='${phone}', username='${username}' WHERE id='${id}'`,
        (err, result) => {
          if (err) {
            reject(new Error(err.message));
          } else {
            resolve(result);
          }
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
  phoneCheck: (phone) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE phone='${phone}'`, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
  getPhoto: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT photo FROM users WHERE id='${id}'`, (err, result) => {
        if (err) {
          reject(new Error(err.message));
        } else {
          resolve(result);
        }
      });
    });
  },
  updatePhoto: (photo, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE users SET photo='${photo}' WHERE id='${id}'`,
        (err, result) => {
          if (err) {
            reject(new Error(err.message));
          } else {
            resolve(result);
          }
        }
      );
    });
  },
};

module.exports = userModel;
