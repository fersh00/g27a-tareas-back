const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')

const protect = asyncHandler(async (req, res, next) => {
    //Definir variable token
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Obtener token del encabezado
            token = req.headers.authorization.split(' ')[1]
            //Verificar firma y token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            //Obtener datos el user del token verificado
            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            console.log(error)
            res.status(402)
            throw new Error('Acceso no autorizado')
        }
    }
    if(!token) {
        res.status(401)
        throw new Error('Acceso no autorizado, no se proporciono token')
    }
})

module.exports = { protect }
