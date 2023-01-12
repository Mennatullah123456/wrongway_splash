import React, { useState, useEffect } from 'react';
import { TextField, List, ListItem, ListItemText } from '@material-ui/core';
import io from 'socket.io-client';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Connect to the server's socket.io namespace
    const socket = io('http://localhost:3001/chat');

    // Listen for new messages
    socket.on('new message', (data) => {
      setMessages([...messages, data]);
    });

    // Cleanup function
    return () => {
      socket.disconnect();
    };
  }, [messages]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the message to the server
    socket.emit('new message', message);

    // Clear the message input
    setMessage('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
        />
      </form>
      <List>
        {messages.map((message, index) => (
          <ListItem key={index}>
            <ListItemText primary={message} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Chat;
