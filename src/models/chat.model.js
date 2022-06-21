const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  store: (data) => {
    const { sender, receiver, message } = data;
    const id = uuidv4();
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO chats (id, sender, receiver, message) VALUES ( '${id}', '${sender}', '${receiver}', '${message}')`,
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  },
  list: (sender, receiver) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT
        chats.message, chats.sender AS sender_id, chats.receiver AS receiver_id, userSender.fullname AS sender, userReceiver.fullname AS receiver, userSender.photo AS sender_photo, userReceiver.photo AS receiver_photo
        FROM chats
        LEFT JOIN users AS userSender ON chats.sender=userSender.id
        LEFT JOIN users AS userReceiver ON chats.receiver=userReceiver.id
        WHERE
        (sender='${sender}' AND receiver='${receiver}')
        OR
        (sender='${receiver}' AND receiver='${sender}')`,
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
