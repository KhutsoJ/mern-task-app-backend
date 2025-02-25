const Task = require('../models/tasks');


const getTasks = async (req, res) => {
    // GET all tasks

    const tasks = await Task.find()

    res.json(tasks)
}

const getTask = async (req, res) => {
    // GET a task

    const { id } = req.params
    const task = Task.findById(id)

    res.json(task)
}

const createTask = async (req, res) => {
    // CREATE a task
    const { title, estimatedTime, timeUnit, completed } = req.body
    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!estimatedTime) {
        emptyFields.push('estimatedTime')
    }
    if (!timeUnit) {
        emptyFields.push('timeUnit')
    }
    if (completed == null) {
        emptyFields.push('completed')
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({
            error: 'Ensure all fields are filled',
            emptyFields
        })
    }


    try {
        const task = await Task.create({ ...req.body })
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateTask = async (req, res) => {
    // UPDATE a task

    const { id } = req.params
    const task = Task.findByIdAndUpdate(id, {
        ...req.params
    })

    res.json(task)
}

const deleteTask = async (req, res) => {
    // DELETE a task

    const { id } = req.params
    const task = await Task.findByIdAndDelete(id, { new: true })

    res.json(task)
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
};