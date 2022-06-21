const { store, list } = require('../models/chat.model');

module.exports = (io, socket) => {
  socket.on('join-room', (data) => {
    // join ke ruangan sendiri
    const { id, email, password, fullname } = data;
    socket.join(id);
  });
  socket.on('send-message', (data) => {
    store(data)
      .then(async () => {
        // kirim pesan ke ruangan orang lain
        const listChat = await list(data.sender, data.receiver);
        io.to(data.receiver).emit('send-message-response', listChat.rows);
        // console.log(listChat.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  socket.on('chat-history', async (data) => {
    const listChat = await list(data.sender, data.receiver);
    io.to(data.sender).emit('send-message-response', listChat.rows);
  });
};
