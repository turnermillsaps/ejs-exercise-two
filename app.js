const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));


app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/ping', (req, res) => {
    res.send('pong');
})

app.get('/feedback', (req, res) => {
    res.render('feedback', {
        pageTitle: 'Coca Cola',
        pageID: 'Home'
    })
})

app.get('/cats', (req, res) => {
    res.render('animal-noises', {
        noise: "Meow"
    })
})

app.get('/woof', (req, res) => {
    res.render('animal-noises', {
        noise: "Woof"
    })
})

app.get('/cats_and_dogs', (req, res) => {
    res.render('living-together', {
        value: "Living Together"
    })
})

app.get('/greet/:name', (req, res) => {
    res.render('hello', {
        name: req.params.name
    })
})

app.get('/year', (req, res) => {
    let currentYear = 2020;
    let birthYear = currentYear - req.query.age;

    res.render('birth-year', {
        year: birthYear
    })
})

app.listen(3000, () => {
    console.log('Server started...');
})