const express = require('express')
const  bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3002
const routeProduct = require('./routes/product')

app.use(express.static('public'))

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api/product', routeProduct)

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})