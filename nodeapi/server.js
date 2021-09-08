const express=require('express')
const app=express();

const port =9090
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/Hi', function (req, res) {
    res.send('I am new to nodemon World')
})

console.log(`we are listening on port ${port}`)

app.listen(port)