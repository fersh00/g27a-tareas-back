const express = require('express')
const router = express.Router()

const {
	getTareas,
	updateTareas,
	crearTareas,
	deleteTareas,
} = require('../controllers/tareasController')

const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getTareas)

router.post('/', protect, crearTareas)

router.put('/:id', protect, updateTareas)

router.delete('/:id', protect, deleteTareas)

module.exports = router
