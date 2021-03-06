// Dependencies
// ===========================================================
const apiRoutes = require('./routes/apiRoutes/notesRoutes');
const htmlRoutes = require('./routes/htmlRoutes/index');

const fs = require('fs');

const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Routes
// ===========================================================

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data

app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('./Develop/public'));

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});