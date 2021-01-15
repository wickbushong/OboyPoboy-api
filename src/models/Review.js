const mongoose = require('mongoose')
const validator = require('validator')

const reviewSchema = mongoose.Schema({
    content: {
        type: String
    },
    stars: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    }   
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review