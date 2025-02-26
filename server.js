// Packages
const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const port = process.env.PORT || 4000

// Local imports
const taskRoutes = require('./routes/tasks')

// Express app
const app = express()

// Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/tasks', taskRoutes)

app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('Connected to the database')
        })
        .catch((error) => {
            console.log(error.message)
        })
})

