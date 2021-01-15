const mongoose = require('mongoose')
const validator = require('validator')

const foodSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    foodType: {
        type: String
    },
    price: {
        type: mongoose.Decimal128,
        required: true,
        default: 0
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food