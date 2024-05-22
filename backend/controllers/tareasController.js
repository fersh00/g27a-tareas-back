const asyncHandler = require('express-async-handler')

const getTareas = asyncHandler( async (req, res) => {
    res.status(200).json({
		msg: 'Get Tareas',
	})
})

const crearTareas = asyncHandler(  async (req, res) => {
    if(!req.body.texto) {
        res.status(400)
        throw new Error ("No teclaste el texto")        
    }    
    res.status(200).json({
		msg: 'Crear Tareas',
	})
})

const updateTareas = asyncHandler( async (req, res) => {
    res.status(201).json({
		msg: `Actualizar tarea con id: ${req.params.id}`,
	})
})

const deleteTareas = asyncHandler( async (req, res) => {
    res.status(200).json({
		msg: `Eliminar tarea con id: ${req.params.id}`,
	})
})

module.exports = {
    getTareas,
    crearTareas,
    updateTareas,
    deleteTareas
}

