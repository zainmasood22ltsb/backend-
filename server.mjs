// server.mjs
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Babaakey Server!');
});

app.get('/babaakey-doi', (req, res) => {
  res.send('Yeh hai Babaakey Doi!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

