# Note-Taker

## Description
The Note Taker app will allow users to write and save notes. This app will will use an Express.js back end and will save and retrieve note data from a JSON file.

---
## User Story
```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

---
## Installation

User must install Node.js and Express.js. To run node, Visual Studio Code with Gitbash/Command line interface is required. Then, run the following commands to include 'package.json':
```
* npm i
* node server.js 
```
Then open http://localhost:3001 in your browser.

---
## Acceptance Criteria
```
GIVEN a note-taking application

WHEN I open the Note Taker
✅ THEN I am presented with a landing page with a link to a notes page

WHEN I click on the link to the notes page
✅ THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column

WHEN I enter a new note title and the note’s text
✅ THEN a Save icon appears in the navigation at the top of the page

WHEN I click on the Save icon
✅ THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes

WHEN I click on an existing note in the list in the left-hand column
✅ THEN that note appears in the right-hand column

WHEN I click on the Write icon in the navigation at the top of the page
✅ THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

---
## License <a name = "license"></a>
This project is licensed under:  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://img.shields.io/badge/License-MIT-yellow.svg)

---
## Demo
![](./public/assets/Note%20Taker.gif)

---
### GithHub: https://github.com/ryuandrew/Note-Taker
### Deployed: https://note-taker-ar-1231.herokuapp.com/