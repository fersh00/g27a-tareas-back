const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por favor indique su nombre'],
    },
    email: {
        type: String,
        required: [true, 'Por favor indique su email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Por favor indique su password'],
    },
    esAdmin: {
        type: Boolean,
        default: false
    }

},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)
