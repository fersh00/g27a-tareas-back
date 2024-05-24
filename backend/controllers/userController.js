const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const login = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	//Verificar si user existe
	const user = await User.findOne({ email })

	if (user && (await bcryptjs.compare(password, user.password))) {
		res.status(200).json({
			_id: user.id,
			name: user.name,
			email: user.email,
            token: generarToken(user.id)
		})
	} else {
		res.status(400)
		throw new Error('Credenciales incorrectas')
	}
})

const register = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body

	if (!name || !email || !password) {
		res.status(400)
		throw new Error('Faltan datos')
	}

	// verificar user no exista
	const userExist = await User.findOne({ email })
	if (userExist) {
		res.status(400)
		throw new Error('Email ya registrado')
	}

	//Hash password
	const salt = await bcryptjs.genSalt(10)
	const hashedPassword = await bcryptjs.hash(password, salt)

	//Crear user
	const user = await User.create({
		name,
		email,
		password: hashedPassword,
	})

	if (user) {
		res.status(201).json({
			_id: user.id,
			name: user.name,
			email: user.email,
		})
	} else {
		res.status(400)
		throw new Error('User no creado')
	}
})

const data = asyncHandler(async (req, res) => {})

const generarToken = id => {
	return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

module.exports = {
	login,
	register,
	data,
}
