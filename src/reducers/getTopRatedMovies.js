import { GET_TOP_RATED_MOVIES } from '../actions/types';
import { initialState } from './state';

const getTopRatedMovies = (state = initialState, action) => {
    switch (action.type) {
      case GET_TOP_RATED_MOVIES:
        return {
          ...state,
          movies:action.payload
        }
      default:
        return state
    }
  }

  export default getTopRatedMovies