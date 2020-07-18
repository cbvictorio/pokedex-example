const server = require('pushstate-server')

const port = 7000
const directory = './dist'

server.start({ port, directory })

console.log(`Server running on http://localhost:${port}`)