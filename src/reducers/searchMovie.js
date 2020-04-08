import { SEARCH_MOVIE } from '../actions/types';
import { initialState } from './state';

const searchMovie = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_MOVIE:
        return {
          ...state,
          searchedMovie:action.payload
        }
      default:
        return state
    }
  }

  export default searchMovie