const mongoose = require('mongoose')
const validator = require('validator')

const reviewSchema = mongoose.Schema({
    content: String,
    stars: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    food: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Food'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review