/* eslint-disable max-len */
const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMovieByTitle = (request, response) => {
  const { title } = request.params

  const foundMovie = movies.filter((movie) => { movie.title === title })

  return response.send(foundMovie)
}

const getMovieByDirectors = (request, response) => {
  const { directors } = request.params

  const foundMovie = movies.filter((movie) => { movie.directors === directors })

  return response.send(foundMovie)
}

const createNewMovie = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response.status(400).send('The following fields are required: title, directors, releaseDate, rating, runTimes, genres')
  }

  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}

module.exports = { getAllMovies, getMovieByTitle, getMovieByDirectors, createNewMovie }

