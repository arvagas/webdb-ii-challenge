const server = require('./api/server')

const port = 5000
server.listen(port, (req, res) => {
    console.log(`*** Listening on http://localhost:${port} ***`)
})