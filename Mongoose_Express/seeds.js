const mongoose = require('mongoose');
const Product = require('./models/product');
mongoose.connect('mongodb://localhost:27017/marketApp', { useNewUrlParser: true })
    .then(() => {
        console.log('mongo connect open')
    })
    .catch(err => {
        console.log('mongo error')
    })

/**const p = new Product({
    name: "cherry",
    price: 2,
    category: "fruit"
})

p.save()
    .then(p => {
        console.log(p)
    })
    .catch(e => {
        console.log(e)
    })*/
const seedProducts = [
    {
        name: 'strawberry',
        price: 2,
        category: "fruit"
    },
    {
        name: 'banana',
        price: 0.79,
        category: "fruit"
    },
    {
        name: 'spring onin',
        price: 0.5,
        category: "vegetable"
    },

    {
        name: 'tomato',
        price: 0.6,
        category: "vegetable"
    }
]
Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })
