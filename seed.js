const mongoose = require('mongoose')
const Task = require('./models/tasks')
require('dotenv').config()

const tasks = [{
    title: 'Design KIA registration form',
    estimatedTime: 2,
    timeUnit: 'Days',
    description: 'Design the Kids Innovate Africa registration form for parents to login their kids',
    completed: false
}, {
    title: 'MERN Course Commerce App',
    estimatedTime: 3,
    timeUnit: 'Days',
    description: 'Start and complete the long overdue MERN course on YouTube by FreeCodeBootcamp',
    completed: false
}, {
    title: 'Fix YelpCamp bugs',
    estimatedTime: 1,
    timeUnit: 'Days',
    description: 'Fix the YelpCamp bug where reviews are not working',
    completed: true
}]

const seedDatabase = async () => {
    await Task.deleteMany({})
    console.log('seeding database')

    for (const task of tasks) {
        const newTask = await Task.create({ ...task })
        await newTask.save()
    }

    console.log('done seeding')
}

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to database')
        seedDatabase()
    })