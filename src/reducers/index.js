import { combineReducers } from 'redux';
import getTopRatedMovies from './getTopRatedMovies';
import getTopRatedShows from './getTopRatedShows';
import getMovieDetails from './getMovieDetails';
import getShowDetails from './getShowDetails';
import searchMovie from './searchMovie';
import searchShow from './searchShow';
import getMovieTrailer from './getMovieTrailer';
import getShowTrailer from './getShowTrailer';

const rootReducer = combineReducers({
    topRated:getTopRatedMovies,
    topShows:getTopRatedShows,
    movieDetails:getMovieDetails,
    showDetails:getShowDetails,
    searchedMovie:searchMovie,
    searchedShow:searchShow,
    movieTrailer:getMovieTrailer,
    showTrailer:getShowTrailer
})

export default rootReducer