// const { text } = require(“express”);
const fs = require('fs');
const path = require('path');

function findById(id, notesArray) {
  const result = notesArray.filter(notes => notes.id === id)[0];
  return result;
}

function filterByQuery(query, notes) {
  let filteredResults = notes;
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

function deleteNoteById(id, notesArray) {
  const newNote = notesArray.filter((note) => note.id !==id);
  console.log('newNote = ' + JSON.stringify(newNote));
  fs.writeFileSync(path.join(__dirname, '../Develop/db/db.json'),
  JSON.stringify({ notes: newNote }, null, 2))
};

function createNewNote(body, notesArray) {
  const notes = body;
  notesArray.push(notes);
  fs.writeFileSync(
    path.join(__dirname, '../Develop/db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return notes;
}

function validateNote(notes) {
  if (!notes.noteTitle || typeof notes.noteTitle !== 'string') {
    return true;
  }
  // need to find the element here and remove the save-note style from the element
  // el.classList.remove("red");
  return res.json(false);
}

module.exports = {
  filterByQuery,
  findById,
  createNewNote,
  validateNote, 
  deleteNoteById
};


