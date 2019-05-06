import React, { Component } from 'react'
import {connect} from 'react-redux';
import { deletePost } from '../actions';
import '../App.css';


class Delete extends Component {

deletePost = e => {
  this.props.deletePost(this.props.id)
}

  render() {
    return (
      <div>
         <i className="fas fa-ban" onClick={()=>this.deletePost()}></i>
      </div>
    )
  }
}

export default connect(null, {deletePost})(Delete)
