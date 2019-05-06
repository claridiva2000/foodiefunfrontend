import axios from 'axios';

export const register = newUser => {
  return axios
    .post('https://foodiefun.herokuapp.com/api/register', {
      username: newUser.username,
      password: newUser.password
    })
    .then(response => {
      localStorage.setItem('userId', response.data.id);
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
};

export const login = user => {
  return axios
    .post('https://foodiefun.herokuapp.com/api/login', {
      username: user.username,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('token', response.data.token);
      return response.data.token;
    })
    .catch(err => {
      console.log(err);
    });
};
