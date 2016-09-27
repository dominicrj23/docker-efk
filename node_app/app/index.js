'use strict'
import express from 'express';
const app = express();
const port = 8080
var logger = require('fluent-logger');
app.get('/', (req, res) => {
  res.send('Hello World!');
});

var server = app.listen(port, () => {
  console.log(`Example app listening at http:\/\/localhost:${port}`);
  var logger = require('fluent-logger')
// The 2nd argument can be omitted. Here is a default value for options.
logger.configure('docker', {
   host: 'fluentd',
   port: 24224,
   timeout: 3.0,
   reconnectInterval: 600000 // 10 minutes
});
setInterval(()=>{
  //logger.emit('appEvent', {id:bidId, taskId:taskId, action:'new', type:'bid'})
},400)
});
