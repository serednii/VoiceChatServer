const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer();
const io = socketIO(server);

io.on('connection', (socket) => {
    socket.on('signal', (data) => {
        io.emit('signal', data);
    });
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
