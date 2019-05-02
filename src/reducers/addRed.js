import {FOODIE_ADD} from '../actions';
import {FOODIE_ADDED } from '../actions';
import { FOODIE_DELETE } from '../actions';
import {browserHistory} from 'react-router';
import { browserRouter, Link, Route } from 'react-router-dom';

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

        // case FOODIE_DELETE: {
        //     const newState = Object.assign([], state);
        //     const indexOfRestToDelete = state.findIndex(shop => {return shop.id == action.shop.id})
        //     newState.splice(indexOfRestToDelete, 1);
        //     browserHistory.push('/restaurant');
        //     return newState;
        //   }
        

        default:
        return state;
    }
  };

  export default addReducer;