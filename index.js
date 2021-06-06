const express = require('express');
const app = express();
app.use(express.json());

const songs = [
    { title: '', id: 1 },
    { title: 'Twilight', id: 2 },
    { title: 'Lorien Legacies', id: 3 }
]

//READ Request Handlers
app.get('/', (req, res) => {
    res.send('Its up');
});

app.get('/api/books', (req, res) => {
    res.send(books);
});

app.get('/api/books/:id', (req, res) => {
    const book = books.find(c => c.id === parseInt(req.params.id));

    if (!book) res.status(404).send('Not found');
    res.send(book);
});

//CREATE Request Handler
app.post('/api/books', (req, res) => {
    const book = {
        id: books.length + 1,
        title: req.body.title
    };
    books.push(book);
    res.send(book);
});

//UPDATE Request Handler
app.put('/api/books/:id', (req, res) => {
    const book = books.find(c => c.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Not found');

    book.title = req.body.title;
    res.send(book);
});

//DELETE Request Handler
app.delete('/api/books/:id', (req, res) => {

    const book = books.find(c => c.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Not found');

    const index = books.indexOf(book);
    books.splice(index, 1);

    res.send(book);
});


//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));