const express = require('express')
const bodyParser = require('body-parser')
const errorHandler = require('errorhandler')

const app = express()
const port = process.env.PORT || 8080

// middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}))

// root route
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public`)
})

app.listen(port, console.log(`Listening on port ${port}`))
