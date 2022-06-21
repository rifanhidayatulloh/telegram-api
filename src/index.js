const { PORT } = require('./helpers/env');
const socketio = require('socket.io');
const http = require('http');
require('dotenv').config();

const socketController = require('./socket/index');
const app = require('./app');

const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: '*',
  },
});
io.on('connection', (socket) => {
  console.log('new user connected');
  socketController(io, socket);
});

app.use(require('./routes/auth.route'));
app.use(require('./routes/user.router'));

// set port or using default port, listen for requests
const port = PORT;
server.listen(port, () => console.log(`Server running at port ${port}`));
