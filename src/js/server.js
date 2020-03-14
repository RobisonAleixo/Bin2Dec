const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src'));

app.post('/convert', (req, res) => {
    let decimal = '10';
    res.send(decimal);
});

app.listen(8080, () => console.log('Server running on port: 8080'));