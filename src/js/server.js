const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src'));

app.post('/convert', (req, res) => {

    let binaryNumber = req.body.binaryNumber;
    let decimal = 0;

    for (let i = binaryNumber.length; i >= 0; i--) {
        decimal += Math.floor(Math.pow(2, (binaryNumber.length -i))) * Number(binaryNumber.charAt(i-1));
    }
    


    res.send({decimal});
});

app.listen(8080, () => console.log('Server running on port: 8080'));