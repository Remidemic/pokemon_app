const express = require('express')
const app = express()
const PORT = 3000
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

const pokemon = require('./models/pokemon')

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/remy', (req, res) => {
    res.send('it worked')
})
app.get('/pokemon', (req, res) => {
    res.render('Index.jsx', { pokemon })
})
app.get('/pokemon/:id', (req, res) => {
    res.render('Show.jsx', { pokeEach: pokemon[req.params.id] })
})


app.listen(3000, () => {
    console.log('Welcome to the Pokemon App!')
})