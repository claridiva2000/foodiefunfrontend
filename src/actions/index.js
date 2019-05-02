import axios from 'axios';

export const FOODIE_FETCH = 'FOODIE_FETCH';
export const FOODIE_FETCHED = 'FOODIE_FETCHED';
export const FOODIE_ERROR = 'FOODIE_ERROR';
export const FOODIE_ADD = 'FOODIE_ADD';
export const FOODIE_ADDED = 'FOODIE_ADDED';
export const FOODIE_DELETE = 'FOODIE_ADDED';
export const FOODIE_UNAUTH = 'FOODIE_UNAUTH';


// const URL = 'https://api.openbrewerydb.org/breweries'

export const getData =() => dispatch =>{
    dispatch({ type: FOODIE_FETCH });

    axios
      .get(`https://foodiefun.com/api/user/review`, {
        headers: { Authorization: localStorage.getItem('token') }
      })
      .then(res => {
        console.log(res);
        dispatch({
          type: FOODIE_FETCHED,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 403) {
          dispatch({ type: FOODIE_UNAUTH, payload: err.response });
        } else {
          dispatch({ type: FOODIE_ERROR , payload: err.response });
        }
      });
  };





  // LOGIN
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
 dispatch({ type: LOGIN_START });

  return axios
    .post(`https://foodiefun.com/api/user/${id}/reviews`, creds)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
      
    })
    .catch(err => {
      console.log('login err: ', err);
      if (err.response && err.response.status === 403) {
        localStorage.removeItem('token');
      }
      dispatch({ type: LOGIN_FAILURE });
    });
};


//ADD

export const addFoodie = foodie => dispatch => {
  dispatch({ type: FOODIE_ADD });

  axios
    .post(`https://foodiefun.com/api/user/review`, foodie)
    .then(res => {
      dispatch({ type: FOODIE_ADD, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FOODIE_ERROR, payload: err });
    });
};


//EDIT
export const updateFoodie = foodie => dispatch => {
  axios.put(`https://foodiefun.com/api/user/review`, foodie).then(res =>
    dispatch({
      type: 'FOODIE_UPDATE',
      payload: res.data
    })
  );
};

//DELETE
export const deletePost = id => {
  return dispatch => {
    return axios
      .delete(`https://foodiefun.com/api/user/${id}/reviews`)
      .then(res => {
        dispatch({ type: FOODIE_DELETE, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FOODIE_ERROR, payload: err });
      });
  };
};

//REGISTER


