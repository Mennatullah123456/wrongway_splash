const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors');
const routes = require('./routes');
const PORT = 3001;

// Enable CORS
app.use(cors());


// Use routes
app.use('/', routes);

// Handle sockets
require('./socketUtils')(io);

// Start the server
http.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
