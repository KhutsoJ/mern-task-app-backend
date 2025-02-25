// Packages
mongoose = require('mongoose')

const Schema = mongoose.Schema

// Schema
// Blueprint that defines properties of a document
const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    estimatedTime: {
        type: Number,
        required: true
    },
    timeUnit: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        required: true
    }
    
}, { timestamps: true })

// Model
// Interact with the database
const Task = mongoose.model('Task', taskSchema)

module.exports = Task