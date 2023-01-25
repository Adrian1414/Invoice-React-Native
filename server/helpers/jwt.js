const jwt = require('jsonwebtoken')


const createToken = (payload) => jwt.sign(payload, process.env.JWT)
const verifyToken = (token) => jwt.verify(token, process.env.JWT)

module.exports = { createToken, verifyToken }