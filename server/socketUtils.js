const io = require('socket.io')(http);

// Set up connection event listener
io.on('connection', socket => {
    console.log('User connected:', socket.id);

    socket.on('join', data => {
        // Handle user joining a room
        socket.join(data.room);
        io.to(data.room).emit('new_user', { user: data.user });
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });

    socket.on('chat_message', data => {
        // Handle chat message event
        io.to(data.room).emit('new_message', { message: data.message, user: data.user });
    });
});

module.exports = io;
