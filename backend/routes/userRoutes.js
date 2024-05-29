const express = require('express')
const router = express.Router()

const {login, register, data } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')




router.post('/login', login)
router.post('/register', register)
router.get('/data',  protect, data)


module.exports = router
