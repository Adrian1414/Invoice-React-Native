if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
const express = require('express')
const server = express()
const port = 4000
const router = require('./routes/index')
const cors = require('cors')

server.use(cors())
server.use(express.urlencoded({extended: true}))
server.use(express.json())
server.use(router)

server.listen(port, () => {
    console.log(`connected to port ${port}`);
})