const movies = [];

function favouriteMovie(operation, movie) {
    // Write your code here
    if(operation == 'add'){
        movies.push(movie)
    }
    else if(operaton == 'remove'){
        movies.pop()
    }
    return movies
}

module.exports = favouriteMovie;
