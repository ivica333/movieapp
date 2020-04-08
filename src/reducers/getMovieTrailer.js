import { GET_MOVIE_TRAILER } from '../actions/types';
import { initialState } from './state';

const getMovieTrailer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MOVIE_TRAILER:
        return {
          ...state,
          movieTrailer:action.payload
        }
      default:
        return state
    }
  }

  export default getMovieTrailer