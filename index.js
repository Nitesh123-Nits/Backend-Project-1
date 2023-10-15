// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs'); 
// Serve HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/sum_of_evens', (req, res) => {
    const numbers = req.body.numbers.split(',').map(Number);
    const result = sum_of_evens(numbers);

    res.render('result.ejs',{result});
});

function sum_of_evens(numbers) {
    return numbers.filter(x => x % 2 === 0).reduce((acc, curr) => acc + curr, 0);
}

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
