
const http = require("http")
const app = require("./src/config/express.config")
const server = http.createServer(app)

server.listen(9006, "127.0.0.1", (err) => {
    if(!err) {
       console.log("server is running on port 9005")
       console.log("Press CTRL+C to disconnect server") 
    }

})