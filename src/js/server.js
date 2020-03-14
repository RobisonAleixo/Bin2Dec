const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src'));

app.post('/', (req, res) => {

    res.send(req.body.binary);
});

app.listen(8080, () => console.log('Server running on port: 8080'));