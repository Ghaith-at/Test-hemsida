const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use('',express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: '.' });
});


app.listen(port, () => {
    console.log(`app listening to port ${port}`);
});