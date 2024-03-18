const express = require('express');

const app = express()
 const port = 4000

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/login',(req,res) => {
    res.send("<h1>Please Login!</h1>")
})

app.get('/signup',(req,res) => {
    res.send("<h2 style='color:red;'>Please Register Yourself!</h2>")
})
app.get('/about',(req,res) => {
    res.send("<h2 style='background-color:crimson;color: white;'>Hey About!</h2>")
})

app.listen(port,(res,req)=> {
  console.log(`app listening on port ${port}`);
})