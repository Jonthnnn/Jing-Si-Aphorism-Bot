const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("Bot has refused death :D")
})

function keepBotAlive() {
  server.listen(3000, () => {
    console.log("Server is alive.")
  })
}

module.exports = keepBotAlive
