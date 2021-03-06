// Using express: http://expressjs.com/
const express = require('express');
const path = require('path')
// require('dotenv').config();



// if (process.env.NODE_ENV !== 'production') require('dotenv').config()
// Create the app
const app = express();

const PORT = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, './public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${  PORT}`);
  

});

app.use(express.static('public'));
