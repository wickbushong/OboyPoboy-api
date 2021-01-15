const express = require('express')
const Review = require('../models/Review')
const User = require('../models/User')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/reviews', async (req, res) => {
    
    try {
        const review = new Review(req.body)
        await review.save()
        res.status(201).send({ review })
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router