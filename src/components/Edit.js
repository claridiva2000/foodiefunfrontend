import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFoodie } from '../actions';
import NavBottom from './NavBottom';
import EditForm from './EditForm';

class Edit extends Component {
constructor(props) {
  super(props)
  
}
  editPost = e => {
    this.props.updateFoodie(this.props.id);
  };
 

  render() {
   
    const post = this.props.posts.filter(
      p => p.id !== this.props.match.params.id
    )[0];
   
    return (
      <>
        {this.props.posts.length ? <EditForm post={post} editPost={this.editPost} /> : null}

        <NavBottom />
      </>
    );
  }
}

export default connect(
  null,
  { updateFoodie }
)(Edit);
