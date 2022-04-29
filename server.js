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

// console logs in node
app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
)
