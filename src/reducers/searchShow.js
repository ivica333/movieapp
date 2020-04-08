import { SEARCH_SHOW } from '../actions/types';
import { initialState } from './state';

const searchShow = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_SHOW:
        return {
          ...state,
          searchedShows:action.payload
        }
      default:
        return state
    }
  }

  export default searchShow