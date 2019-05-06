import { SEARCH } from '../actions';

const initialState = {
    restaurant: [],
    search: ''
 
};

export function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH:
            console.log("searchin for posts", action.payload)
            return { ...state, search: action.payload };
    

    default:
        return state;
}
}

export default searchReducer;

