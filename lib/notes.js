// const { text } = require(“express”);
const fs = require('fs');
const path = require('path');

function findById(id, notesArray) {
  const result = notesArray.filter(notes => notes.id === id)[0];
  return result;
}

function filterByQuery(query, notes) {
  let filteredResults = notes;
  if (query.notesTitle) {
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
  const notes = body;
  notesArray.push(notes);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ note: notesArray }, null, 2)
  );
  return note;
}

function validateNote(notes) {
  if (!notes.notesTitle || typeof notes.notesTitle !== 'string') {
    return false;
  }
  return res.json(false);
}

// const saveNoteTitle = event => {
//   event.preventDefault();
//   const index.html = $saveNoteTitle.querySelector(‘[name=“title”]’);
//    getNoteTitle(NoteTitleObject)
// }
// $saveNoteTitle.addEventListener(‘save’,)

module.exports = {
  filterByQuery,
  findById,
  createNewNote,
  validateNote
};


