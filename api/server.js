const express = require('express')

const server = express()
server.use(express.json())

function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`)

    next()
}

// @@@@@@@@@@ Global Middleware @@@@@@@@@@
server.use(logger)

// Api Test
server.get('/', (req, res) => {
    res.json('Hello from webdb-ii-challenge!')
})

module.exports = server