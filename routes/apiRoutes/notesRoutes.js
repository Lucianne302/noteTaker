const router = require('express').Router();

const { filterByQuery, findById, createNewNote, validateNote, deleteNoteById, } = require('../../lib/notes');
const { notes } = require('../../Develop/db/db.json');

router.get('/notes', (req, res) => {
  if (req.query) {
    results = filterByQuery(req.query, notes);
  }
  res.json(results);
});

router.get('/notes/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.delete('/notes/:id',(req, res) => {
  deleteNoteById(req.params.id, notes);
  res.json().end();
});

router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();
  // if any data in req.body is incorrect, send 400 error back
  if (!validateNote(req.body)) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    const addNotes= createNewNote(req.body, notes);
    res.json(addNotes);
  }
});

module.exports = router;
