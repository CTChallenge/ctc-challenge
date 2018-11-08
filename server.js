// Using express: http://expressjs.com/
const express = require('express');
// Create the app
const app = express();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`listening on port ${  PORT}`);

});

app.use(express.static('public'));
