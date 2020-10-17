// const { text } = require(“express”);
const fs = require('fs');
const path = require('path');

function findById(id, notesArray) {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
}

function filterByQuery(query, note) {
  let filteredResults = note;
  if (query.noteTitle) {
    filteredResults = filteredResults.filter(
      // Since our form data will be coming in as strings, and our JSON is storing
      // age as a number, we must convert the query string to a number to
      // perform a comparison:
      (note) => note.noteTitle === String(query.noteTitle)
    );
  }
  if (query.noteText) {
    filteredResults = filteredResults.filter(
      (note) => note.noteText === query.text
    );
  }
  return filteredResults;
}

function findById(id, notesArray) {
  const result = notesArray.filter((note) => note.id === id)[0];
  return result;
}

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ note: notesArray }, null, 2)
  );
  return note;
}

function validateNote(note) {
  if (!note.notesTitle || typeof note.notesTitle !== 'string') {
    return false;
  }
  return res.json(false);
}

// const saveTitle = Event => {
//   event.preventDefault();
//   const index.html = $savenoteTitle.querySelector(‘[name=“title”]’);
//    getNoteTitle(titleobject??)
// }
// $.addEventListener(‘save’,)

module.exports = {
  filterByQuery,
  findById,
  createNewNote,
  validateNote
};


