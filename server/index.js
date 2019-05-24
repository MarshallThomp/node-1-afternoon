const express = require('express')
const  {getProducts, getProduct} = require('./getProducts')
const app = express()
const port = 3214

// let products = require('../products.json')


app.get('/api/products', getProducts)
app.get('/api/products/:id', getProduct)



app.listen(port, () => {
    console.log('listening on port', port)
})
