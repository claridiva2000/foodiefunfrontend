import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFoodie } from '../actions';
import {Link} from 'react-router-dom';



 
  
  export class EditForm extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        id: null,
        restaurantName: '',
        photo: '',
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
  


  componentDidMount() {
   
     this.props.post && this.setState({
        id: this.props.post.id,
        restaurantName: this.props.post.restaurantName,
        photo: this.props.post.photo,
        foodType: this.props.post.foodType,
        comments:this.props.post.comments,
        rating: this.props.post.rating,
        price: this.props.post.price,
        date:this.props.post.date,
        restaurantInfo: this.props.post.restaurantInfo,
        favorite: this.props.post.favorite,
        userId: this.props.post.userId
     
      })
    }

    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  
  
    // deleteReview = e => {
    //   this.props.actions.deletePost(this.state.restaurants)
    // }

    UpdateHandler = e =>{
      
    
    
    }

    editPost = (e) => {
      
      const changes = {
        restaurantName: this.state.restaurantName,
        photo: this.state.photo,
        foodType: this.state.foodType,
        comments:this.state.comments,
        rating: this.state.rating,
        price: this.state.price,
        date:this.state.date,
        restaurantInfo: this.state.restaurantInfo,
        favorite: this.state.favorite,
        }
        e.preventDefault();
        this.props.updateFoodie(this.state.id, changes)
    }
    
  
    
   
  
    render() {
    
      return (
        <div>
        <form style={formStyle} onSubmit={this.editPost}>
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
            value={this.state.restrauntInfo}
            onChange={this.handleChange}
          />
          
          <button style={buttonStyle} type='submit' >Update!</button>
          <button style={buttonStyle}><Link style={linkButton}to='/'>Return to Home</Link></button>
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
    {updateFoodie }
  )(EditForm);


  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    background: '#F1F3D7',
    padding: '30px',
    margin: '0px',
    
  
  };
  
  const inputStyle = {
  border: '#232A34 1px solid',
  borderRadius: '5px',
  margin:'2px',
  padding: '10px',
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
}

