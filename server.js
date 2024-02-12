const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const LOLsocket = require('lolsocket-sdk');

const app = express();

const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const getContentType = (extname) => {
  switch (extname) {
    case '.js':
      return 'text/javascript';
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    default:
      return 'application/octet-stream';
  }
};

const lol = new LOLsocket('API-KEY', 'API-SECRET');


app.use(express.json());

app.post('/send', async(req, res) => {
  
  const { uid, username, text } = req.body;
  lol.publish('chat', 'general', { uid, username, text });

  res.status(200).send('Message sent');
})




const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
