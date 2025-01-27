const movies = require('./movies.json');

/**
 * Get only first ten movies
 * @returns {Array}
 */
function getFirstTenMovies(){
    return movies.slice(0,10)
}

/**
 * Get all movies filtered by genre
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    return movies.filter(element => element.genre.includes(genre))
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n\n`,firstTenMovies);
    console.log(`Only Drama movies:\n\n`,dramaMovies);
}

main();