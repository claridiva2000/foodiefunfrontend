import React from 'react';
import {Link} from 'react-router-dom';
import Delete from './Delete';
import Search from './Search';
import '../App.css';



const FoodList = props => {
  

  
  return (
    
    <div className='foodList'>
    
    <Search posts={props.posts}/>
    {props.posts.map(post => (
      <div key={post.id} className='foodCard'>
        <h2 className='heading'>{post.restaurantName}</h2>
        <img className='image' src={post.photo} alt="alt" style={imageStyle} />
        <div className='editdelete'>
        <Delete id={post.id} />
        <Link to={`/edit/${post.id}`}> <i className="far fa-edit"></i> </Link>
        </div> 
        <h5>Date Visited</h5>  
        <p className='postText'> {post.date}</p>
        <h5>Price</h5>  
        <p className='postText'> {post.price}</p>
        <h5>Rating</h5>  
        <p className='postText'> {post.rating}</p>
        <h5>Comments</h5>  
        <p className='postText'>{post.comments}</p>
        <h5>Restaurant Info</h5>  
        <p className='postText'> {post.restaurantInfo}</p>
      </div>
    ))}
    </div>
  )
}

export default FoodList;

const imageStyle = {
  width: '350px',
  height: '240px',
  borderRadius: '5px',
  border: '#B5223D 1px solid'
};