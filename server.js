'use strict';

const express = require('express');
const MongoClient = require('mongodb').MongoClient;

// Constants
const PORT = process.env.PORT || 8080;
const DATABASE_PORT_27017_TCP_ADDR = process.env.DATABASE_PORT_27017_TCP_ADDR || '0.0.0.0:27017';
const DB_NAME = process.env.DB_NAME || 'TEST';

// App
const app = express();
var db;

MongoClient.connect('mongodb://'+ DATABASE_PORT_27017_TCP_ADDR + '/' + DB_NAME, (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(PORT, () => {
    console.log('Running on http://localhost:' + PORT);
  })
})

// App logic
app.get('/', function (req, res) {
  db.collection('greetings').find().toArray((err, result) => {
    if (err) return console.log(err);
    res.send(result);
  })
});

app.get(['/hello', '/hi'], (req, res) => {
  db.collection('greetings').insertOne({"greeting": req.path}, (err, result) => {
    if (err) return console.log(err);
    console.log('%s saved to database', req.path);
    res.redirect('/');
  })
})
