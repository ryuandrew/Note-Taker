const routes = require('express').Router()
const fs = require('fs') // bringing in file system from node
const { v4: uuidv4 } = require('uuid'); // bringing in uuid

// when we have a GET request with /notes, this function will be called.
// takes it out of json to make it js then sends it to the browser as a json
routes.get('/notes', (req, res) => {
    // read json format, parse it into js and then send(respond) as json
    const db = JSON.parse(fs.readFileSync('db/db.json'))  // start at root level
    res.json(db) 
})

// when we have a POST request with /notes, this function will be called
routes.post('/notes', (req, res) => {
    //taking new note and save it to a variable
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()  // gives each note a unique id
    }
    const db = JSON.parse(fs.readFileSync('db/db.json'))  // start at root level
    db.push(newNote)  // add to db variable

    fs.writeFileSync('db/db.json', JSON.stringify(db)) // saving as a string
    res.json(db) // responding back to browser
})


// exporting it to make sure other files have access to it
module.exports = routes