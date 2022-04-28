const routes = require('express').Router()
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

routes.get('/notes', (req, res) => {
    const db = JSON.parse(fs.readFileSync('db/db.json'))  // start at root level
    // read json format, partse it into js and then send(respond) as json
    res.json(db) 
})

routes.post('/notes', (req, res) => {
    const newNote = {  //taking new note and save it to a var
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    const db = JSON.parse(fs.readFileSync('db/db.json'))  // start at root level
    db.push(newNote)  //add to db var

    fs.writeFileSync('db/db.json', JSON.stringify(db)) // saving as a string
    res.json(db) //responding back to browser
})


module.exports = routes