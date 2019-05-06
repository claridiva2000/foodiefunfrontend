import {FOODIE_FETCH} from '../actions';
import {FOODIE_FETCHED} from '../actions';


const initialState = {
    restaurants:[],
    foodieFetch: false,
    foodieFetched: false,
    search:'',
    post:''

};


export const fetchReducer = (state = initialState , action) => {
    switch (action.type) {
        case FOODIE_FETCH:
            return {...state, foodieFetch: true };
        case FOODIE_FETCHED:
            return {
                ...state, 
                foodieFetch: false, 
                restaurants:[...state.restaurants, ...action.payload]
            };

        default:
        return state;
    }
  };
  export default fetchReducer;



