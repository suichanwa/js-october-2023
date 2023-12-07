const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/Mancare_calda', (req, res) => {
  res.sendFile(__dirname + 'Pages/Mancare_calda.html');
});

app.get('/Mancare_rece', (req, res) => {
  res.sendFile(__dirname + 'Pages/Mancare_rece.html');
});

app.get('/Despre_noi', (req, res) => {
  res.sendFile(__dirname + 'Pages/Despre_noi.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/Pages/contact.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

