const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getMovieByTitle, getMovieByDirectors, createNewMovie } = require('./controllers/movies')

const app = express()

app.get('/', getAllMovies)

app.get('/:title', getMovieByTitle)

app.get('/:directors', getMovieByDirectors)

app.post('/', bodyParser.json(), createNewMovie)

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})

