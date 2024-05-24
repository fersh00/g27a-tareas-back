const express = require('express')
const router = express.Router()

const {login, register, data } = require('../controllers/userController')



router.post('/login', login)
router.post('/register', register)
router.get('/data', data)


module.exports = router
