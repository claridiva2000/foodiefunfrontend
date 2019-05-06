import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addFoodie } from '../actions';
import { Link } from 'react-router-dom';
import '../App.css';

const foobar = localStorage.getItem('userId');

export class AddNewForm extends Component {
  constructor() {
    super();

    this.state = {
      id: Date.now(),
      restaurantName: '',
      photo: '',
      foodName: '',
      foodType: '',
      comments: '',
      rating: null,
      price: null,
      date: '',
      restaurantInfo: '',
      favorite: null,
      userId: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    this.setState({
      id: Date.now(),
      userId: foobar
    });
  }

  addReview = e => {
    e.preventDefault();
    this.setState({
      id: Date.now(),
      restaurantName: this.props.restaurantName,
      photo: this.state.photo,
      foodName: this.props.foodName,
      foodType: this.props.foodType,
      comments: this.props.comments,
      rating: this.props.rating,
      price: this.props.price,
      date: this.props.date,
      restaurantInfo: this.props.restaurantInfo,
      favorite: this.props.favorite,
      userId: foobar
    });

    let data = { ...this.state };
    this.props.addFoodie(data);

    console.log(this.state);
  };

  render() {
    return (
      <div className="editFoodForm" style={formStyle}>
        <form style={formStyle} onSubmit={this.addReview}>
          <input
            type="text"
            name="restaurantName"
            style={inputStyle}
            placeholder="Name"
            value={this.state.restaurantName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="date"
            style={inputStyle}
            placeholder="Date"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="foodType"
            style={inputStyle}
            placeholder="Restauraunt Type"
            value={this.state.foodType}
            onChange={this.handleChange}
          />

          <input
            type="number"
            name="Price"
            style={inputStyle}
            placeholder="Price 1-5"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="rating"
            style={inputStyle}
            placeholder="Rating 1-5"
            value={this.state.rating}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="photo"
            style={inputStyle}
            placeholder="Place Image URL Here"
            value={this.state.photo}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="comments"
            style={inputStyle}
            placeholder="Comments"
            value={this.state.comments}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="restaurantInfo"
            style={inputStyle}
            placeholder="Info"
            value={this.state.restaurantInfo}
            onChange={this.handleChange}
          />

          <button
            style={submitButtonStyle}
            type="submit"
            onClick={console.log('added!')}
          >
            Submit
          </button>
          <button style={buttonStyle}>
            {' '}
            <Link style={linkButton} to="/add-new">
              Add Another
            </Link>
          </button>
          <button style={buttonStyle}>
            <Link style={linkButton} to="/">
              Return to Home
            </Link>
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurant
});

export default connect(
  mapStateToProps,
  { addFoodie: addFoodie }
)(AddNewForm);

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  background: '#F1F3D7',
  padding: '30px',
  margin: '0px',
  height: '800px'
};
  
const submitButtonStyle = {
  color: '#232A34',
  background: '#F1F3D7',
  border: '#232A34 1px solid',
  borderRadius: '5px',
  padding: '10px',
  margin: '5px',
  cursor:'pointer'
};
const buttonStyle = {
  color: '#232A34',
  background: '#F1F3D7',
  border: '#232A34 1px solid',
  borderRadius: '5px',
  padding: '10px',
  margin: '5px'
};

const linkButton = {
  textDecoration: 'none',
  color: 'black'
};
const inputStyle = {
  border: '#232A34 1px solid',
  borderRadius: '5px',
  margin: '2px',
  padding: '10px'
};
