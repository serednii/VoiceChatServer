const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer();
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('signal', (data) => {
        io.emit('signal', data);
    });
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
