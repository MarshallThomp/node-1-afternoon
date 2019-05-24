const products = require('../products.json')

const getProducts = (req, res) => {
    if(req.query.price) {
        let filterProduct = products.filter(product => {
            return product.price >= +req.query.price
        })
        return res.status(200).send(filterProduct)
    }else {
        res.status(200).send(products)
    }
    }

const getProduct = (req, res) => {
    let {id} = req.params
    let product = products.find(product => +product.id === +id)
    if(!product) {
        return res.status(500).send('Item not in list')
    }
    res.status(200).send(product)
}


module.exports = {
    getProducts,
    getProduct
}