const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('accueil', { title: 'Portfolio 2024' });
});

app.get('/projets', (req, res) => {
    res.render('projets');
});

app.get('/stage2024', (req, res) => {
    res.render('stage2024');
});

app.get('/stage2023', (req, res) => {
    res.render('stage2023');
});

app.get('/BUT1', (req, res) => {
    res.render('BUT1');
});

app.get('/BUT2', (req, res) => {
    res.render('BUT2');
});

app.get('/BUT3', (req, res) => {
    res.render('BUT3');
});

app.get('/s101', (req, res) => {
    res.render('BUT1/s101');
});

app.get('/s102', (req, res) => {
    res.render('BUT1/s102');
});

app.get('/s103', (req, res) => {
    res.render('BUT1/s103');
});

app.get('/s104', (req, res) => {
    res.render('BUT1/s104');
});

app.get('/s105', (req, res) => {
    res.render('BUT1/s105');
});

app.get('/s106', (req, res) => {
    res.render('BUT1/s106');
});

app.get('/s126', (req, res) => {
    res.render('BUT1/s126');
});

app.get('/s345', (req, res) => {
    res.render('BUT1/s345');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
