var express = require('express')


var app = express()

app.get('/',(req,res) => {
    res.send("I know how to open node..yay");
})

app.listen(3000, ()=> console.log('listening to log 3000'))