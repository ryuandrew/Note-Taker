const path = require('path'); //standard library path
const routes = require('express').Router()
const apiRoutes = require('./apiRoutes')
routes.use('/api', apiRoutes) // send it to apiRoutes file


// start with html
routes.get('/', (req, res) => 
    // take the directory I'm currently in and joining the html path to it
    res.sendFile(path.join(__dirname, '../public/index.html'))
)

// GET /notes should return the notes.html file
routes.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/notes.html'))
)

// GET * should return the index.html file
routes.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/index.html'))
)



module.exports = routes