import React, { Component } from 'react';

import NavBottom from './NavBottom';
import AddNew from './AddNew';
import FoodList from './FoodList';

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { getData, deletePost } from '../actions';
import jwt_decode from 'jwt-decode';


// import  fetchReducer from '../reducers';
import Edit from './Edit';
import '../App.css';

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      errors: {}
    };
  }

  componentDidMount() {
    this.props.getData();
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    this.setState({
      name: decoded.name,
      email: decoded.email
    });
  }

  render() {
    
    return (
      <div>
       
        <Route exact path="/" render={props => <FoodList {...props} posts={this.props.restaurants} />} />
        <Route exact path="/add-new" component={AddNew} />
        <Route
          exact
          path="/edit/:id"
          render={props => <Edit posts={this.props.restaurants} {...props} />}
        />
        <Route exact path="/" component={NavBottom} />
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.fetchReducer.restaurants,
    foodieFetch: state.foodieFetch,
    foodieError: state.foodieError
  };
};

export default connect(
  mapStateToProps,
  { getData, deletePost }
)(Main);

