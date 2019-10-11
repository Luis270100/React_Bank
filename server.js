const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const Schema = mongoose.Schema

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ReactBank', { useNewUrlParser: true })
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})


// Schema 
const TransactionSchema = new Schema({
    amount: Number,
    category: String,
    vendor: String
})


const Transaction = mongoose.model('Transaction', TransactionSchema)

module.exports = Transaction
// 


app.get('/transactions', function (req, res){
    Transaction.find({}, function(err, results){
        console.log(results)
        res.send(results)
    })
})

app.post('/transaction', function (req, res ){
    console.log(req.body)
    let transaction = new Transaction (req.body)
    transaction.save()
    res.end() 
})

const PORT = 4000
app.listen(process.env.PORT || PORT, () => console.log(`Running on port ${PORT}`))