import { GET_TOP_RATED_SHOWS } from '../actions/types';
import { initialState } from './state';

const getTopRatedShows = (state = initialState, action) => {
    switch (action.type) {
        case GET_TOP_RATED_SHOWS:
          return {
            ...state,
            shows:action.payload
          }
      default:
        return state
    }
  }

  export default getTopRatedShows