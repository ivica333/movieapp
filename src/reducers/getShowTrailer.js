import { GET_SHOW_TRAILER } from '../actions/types';
import { initialState } from './state';

const getShowTrailer = (state = initialState, action) => {
    switch (action.type) {
      case GET_SHOW_TRAILER:
        return {
          ...state,
          showTrailer:action.payload
        }
      default:
        return state
    }
  }

  export default getShowTrailer