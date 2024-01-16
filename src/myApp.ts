import express from 'express';
import path from 'path';
const app = express();

console.log('Hello World');
console.log(__dirname);

app.get('/', function (req, res) {
  if(__dirname.includes('src')) {
    res.sendFile(path.join(__dirname, '../views/index.html'))
  } else {
    res.sendFile(path.join(__dirname, 'views/index.html'))
  }
})

export default app;
