import {FOODIE_ERROR} from '../actions';
import {FOODIE_UNAUTH } from '../actions';

const initialState = {
    foodieError: null
};


export const errorReducer = (state = initialState , action) => {
    switch (action.type) {
        case FOODIE_ERROR:
            return {...state, foodieError: action.payload };
        case FOODIE_UNAUTH:
            return {...state, error: action.payload.data.error, errorStatusCode:action.payload.status, foodieFetch:false };

        default:
        return state;
    }
  };

  export default errorReducer;