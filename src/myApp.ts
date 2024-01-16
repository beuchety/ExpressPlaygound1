import express from 'express';
import path from 'path';
const app = express();

console.log('Hello World');
console.log(__dirname);
const prefix = __dirname.includes('src') ? "../" : "";
const publicPath = prefix + 'public';
const indexhtmlPath = prefix + 'views/index.html';

app.use(express.static(path.join(__dirname, publicPath)));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, indexhtmlPath));
});

export default app;
