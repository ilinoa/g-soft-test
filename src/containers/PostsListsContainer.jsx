import React from 'react';
import { connect } from 'react-redux';
import {PostsList} from '../components/PostList';

const PostsListContainer = ({ posts, isFetching }) =>
  <PostsList posts={posts} isFetching={isFetching}/>


const mapStateToProps = ({ posts, isFetching }) => {
  return {
    posts,
    isFetching,
  }
}

export default connect(
  mapStateToProps,
)(PostsListContainer);
