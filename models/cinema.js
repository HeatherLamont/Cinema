const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getListOfFilmTitles = function(){
  return this.films.map((film)=> {
    return film.title;
  });
}

Cinema.prototype.findFilmByTitle = function(filmTitle){
  return this.films.find((film)=>{
    return film.title === filmTitle;
   }); 
};

Cinema.prototype.filmByGenre = function(whatGenre){
  return this.films.filter((film)=>{
    return film.genre === whatGenre;
  })
}

Cinema.prototype.filmByYear = function(whatYear){
 return this.films.some((film)=>{
    return film.year === whatYear;
  });
}

Cinema.prototype.filmByLength = function(whatLength){
  return this.films.every((film)=>{
    return film.length > whatLength;
  })
}

Cinema.prototype.totalFilmLength = function(){
  return this.films.reduce((runningTotal,film)=>{
    return runningTotal + film.length;
  },0)
}

Cinema.prototype.filmsByProperty = function(property, searchValue){
  return this.films.filter((film)=>{
    return film[property] === searchValue;
  })
}


module.exports = Cinema;
