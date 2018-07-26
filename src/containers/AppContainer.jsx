import React from 'react';
import { connect } from 'react-redux';
import { fetchPostData } from '../actions/postsActions';
import App from '../App';


const AppContainer = props =>
    <App {...props}/>

const mapStateToProps = ({ currentPage }) => {
  return {
    currentPage,
  }
}

export default connect(mapStateToProps, {
    fetchPostData,
})(AppContainer);