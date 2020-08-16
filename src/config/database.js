require('dotenv').config()
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost:27017/todo?authSource=admin', {
    user: process.env.APP_DB_USER,
    pass: process.env.APP_DB_PASSWORD
})