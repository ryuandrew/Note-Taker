const path = require('path'); //standard library path
const routes = require('express').Router()

const apiRoutes = require('./apiRoutes') // bringing in the apiRoutes file
routes.use('/api', apiRoutes) // any requests that come in through /api, we'll send it to apiRoutes file

// GET /api/notes should read the db.json file and return all saved notes as JSON.
// GET /notes should return the notes.html file
routes.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/notes.html'))
)

// GET * should return the index.html file
routes.get('*', (req, res) => 
    // take the directory I'm currently in and joining the html path to it
    res.sendFile(path.join(__dirname, '../public/index.html'))
)


// exporting it to make sure other files have access to it
module.exports = routes