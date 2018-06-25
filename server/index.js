import express from 'express'

const APP = express()

APP.use((req, res, next) => {
  next()
})

APP.get('/', (req, res) => {
  console.log('Someone\'s here -_-' )
  res.send('Welcome to some node.js server')
})

APP.listen(3000, () => console.log('Very important message for my terminal <3'))
