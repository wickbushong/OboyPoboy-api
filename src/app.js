const express = require('express')
const userRouter = require('./routers/user')
const reviewRouter = require('./routers/review')
const port = process.env.PORT
require('./db/db')

const app = express()

app.use(express.json())
app.use(userRouter)
// app.use(userRouter, express.json())
app.use(reviewRouter)


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})