const exec = require('child_process').exec;
const express = require('express');

const app = express();


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.use('/restful',require('./restful/default-router'))

app.listen(4000,function(err){
    if(!err){
        exec('start http://localhost:4000')
    }else{
        console.log(err)
    }
})