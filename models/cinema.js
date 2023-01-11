const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listedFilms = function () {
  let listOfFilms = []
  this.films.forEach((movie) => { listOfFilms.push(movie.title)
  })
    return listOfFilms
}

Cinema.prototype.movieByGenre = function (genre) {
  const result = this.films.filter(movie => movie.genre === genre)
  // const result = this.films.filter(movie => movie[genre] !== genre)
  console.log(result)
  return result 
}

Cinema.prototype.totalRunningTime = function () { 
  const result = this.films.reduce ((runningTotal, film) => {return runningTotal + film.length}, 0) 
  console.log(result)
  return result 
}   

Cinema.prototype.findByTitle = function (title) {
  const result = this.films.find(film => film.title === title) 
  return result
} 

Cinema.prototype.filmsByYear = function (year) {
  if (this.films.find(film => film.year === year)) {
    const result = this.films.filter(movie => movie.year === year) 
    return result 
  }else return "No movies matching that year"
}

Cinema.prototype.filmsOverLength = function (minutes) {
  const result = this.films.filter(movie => movie.length >= minutes)
  return result 
}

module.exports = Cinema;

