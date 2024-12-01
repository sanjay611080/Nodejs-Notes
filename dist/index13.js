// Example 1 

const express = require('express')
const app = express()

const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
})

app.listen(3000)



// Example 2 

app.get('/user/:id', (req, res, next) => {
    console.log('ID:', req.params.id)
    next()
  }, (req, res, next) => {
    res.send('User Info')
  })
  
  // handler for the /user/:id path, which prints the user ID
  app.get('/user/:id', (req, res, next) => {
    res.send(req.params.id)
  })

  