const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const database = require('./db/db.json')
const routes = require('./routes')

// data parsing 
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// static middleware - search for the item/file in the public directory.
app.use(express.static('public'))
app.use(routes)


// GET /api/notes should read the db.json file and return all saved notes as JSON.
// app.route("")


// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

// npm uuid

// console logs in node
app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
)
