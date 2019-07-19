//npm i -g eslint
//eslint --init

/**
 * eslint defines format rules
 * prettier is an opinionated code formatter
 */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('heelo');
  process.exit(1);
});

app.listen(3000, () => console.log('Listening on port 3000'));
