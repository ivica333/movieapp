import { GET_SHOW_DETAIL } from '../actions/types';
import { initialState } from './state';

const getShowDetails = (state = initialState, action) => {
    switch (action.type) {
      case GET_SHOW_DETAIL:
        return {
          ...state,
          showDetails:action.payload
        }
      default:
        return state
    }
  }

  export default getShowDetails