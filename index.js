const express = require('express')
var exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//app.set('views', './views');

app.use(express.urlencoded({ extended: true }));

const messages = []

app.get('/', (req, res) => {
    res.render('home', {messages});
});

app.post('/message', (req,res) => {
    const messageText = req.body.messageText
    messages.push(messageText)
    res.redirect('/')
});

app.get('/time', (req, res) => {
    res.send('The current time is ' + (new Date()). toLocaleTimeString());
});

app.listen(8000, () => {
    console.log('listen on localhost:8000');
});