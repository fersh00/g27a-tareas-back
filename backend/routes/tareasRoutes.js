const express = require('express')
const router = express.Router()

const {getTareas, updateTareas, crearTareas, deleteTareas } = require('../controllers/tareasController')


router.get('/', getTareas)

router.post('/', crearTareas)

router.put('/:id', updateTareas)

router.delete('/:id', deleteTareas)

module.exports = router
