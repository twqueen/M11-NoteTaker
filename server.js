// import required packages
const express = require('express');
const path = require('path');
const api = require('./routes/apiRoutes.js')

// to get the app running setup
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/notes', api);
app.use(express.static('public'));

// get route to homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// get route to notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at ${PORT}`)
);