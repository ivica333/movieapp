import { GET_MOVIE_DETAIL } from '../actions/types';
import { initialState } from './state';

const getMovieDetails = (state = initialState, action) => {
    switch (action.type) {
      case GET_MOVIE_DETAIL:
        return {
          ...state,
          movieDetails:action.payload
        }
      default:
        return state
    }
  }

  export default getMovieDetails