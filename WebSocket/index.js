const webSocketsServerPort = 8000
const webSocketServer = require("websocket").server
const http = require("http")

const server = http.createServer()
server.listen(webSocketsServerPort)
console.log("listenting: 8000")

const wsServer = new webSocketServer({
  httpServer: server,
})
