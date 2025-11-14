const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Log and handle all requests
app.all('/', (req, res) => {
  console.log('=== Incoming Request ===');
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', req.headers);
  console.log('Authorization header:', req.headers.authorization || '<none>');
  res.send('OK');
});

// Start server and attach event listeners
const server = app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});

server.on('error', err => {
  console.error('SERVER ERROR:', err);
});

server.on('close', () => {
  console.log('SERVER CLOSED');
});

process.on('uncaughtException', err => {
  console.error('UNCAUGHT EXCEPTION:', err);
});

process.on('unhandledRejection', reason => {
  console.error('UNHANDLED REJECTION:', reason);
});

// Keep event loop alive for debugging
setInterval(() => {}, 1000000);
