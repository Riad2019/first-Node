var express = require('express')


var app = express()

app.get('/',(req,res) => {
    
    const fruit = {
        product :'mango',
        price : 220
    }


    res.send(fruit);
});
app.get('/fruit/banana',(req,res) => {
    res.send({product: 'kola' ,quantity: 100 ,price :1000 })
})

app.listen(3000, ()=> console.log('listening to log 3000'))