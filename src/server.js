const express = require("express")
const server = express()

server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

server.get('/', (request, response) => {
  return response.render("index.html", { title: "OI" })
})

server.get('/create-point', (request, response) => {
  return response.render("create-point.html")
})

server.get('/search-results', (request, response) => {
  return response.render("search-results.html")
})

server.listen(3000)