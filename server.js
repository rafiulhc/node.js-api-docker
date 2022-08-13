const express = require("express")
const server = require("http")
const bodyParser = require("body-parser")

const app = express()
server.createServer(app)




app.get("/", (req, res) => {
    res.send("Hello World")
})

const port = 3001
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
} )