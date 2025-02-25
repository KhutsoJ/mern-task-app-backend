// Packages
const express = require('express')

// Local imports
const taskController = require('../controllers/tasks')

// Router
const router = express.Router()


router.get('/', taskController.getTasks)

router.get('/:id', taskController.getTask)

router.post('/', taskController.createTask)

router.patch('/:id', taskController.updateTask)

router.delete('/:id', taskController.deleteTask)


module.exports = router