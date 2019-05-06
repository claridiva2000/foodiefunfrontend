import {FOODIE_ADD} from '../actions';
import {FOODIE_ADDED } from '../actions';
import { FOODIE_DELETE } from '../actions';
import {FOODIE_UPDATE} from '../actions';


const initialState = {
    restaurant: [],
    foodieAdd: false,
    foodieAdded: false 
};


export const addReducer = (state = initialState , action) => {
    switch (action.type) {
        case FOODIE_ADD:
            return {...state, foodieAdd: true };
        case FOODIE_ADDED:
            return {...state, foodieAdd: false, foodieAdded: true, restaurant: action };

        case FOODIE_DELETE: {
          return {
            ...state, 
            restaurant: [...state.restaurant.filter(r => r.id !== action.id)]
          
          };
        }
          case FOODIE_UPDATE : {
              return state.map(post => {
                  return post.id === action.restaurant.id ? action.newPost : post;
              })
          }
        

        default:
        return state;
    }
  };

  export default addReducer;