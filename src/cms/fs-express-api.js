const express = require('express');
const fsMiddleware = require('netlify-cms-backend-fs/dist/fs');

const app = express();
const port = 3000;
const host = 'localhost';

app.use(express.static('.')); // root of our site

// add cors code here (shown below) if you have a cors issue

fsMiddleware(app); // sets up the /api proxy paths

app.listen(port, () => console.log(`
  Server listening at http://${host}:${port}/
  API listening at http://${host}:${port}/api
`));
