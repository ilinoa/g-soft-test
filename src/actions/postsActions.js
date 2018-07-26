import { fetchPosts } from '../utils/CallApiUtil';


const addPosts = (posts) => {
  return {
    type: 'ADD_POSTS',
    payload: {
      posts,
    },
  };
};

const fetchPostsAction = () => {
  return {
    type: 'FETCH_POSTS',
  };
};

export const fetchPostData = (page) => (dispatch) => {
  dispatch(fetchPostsAction());
  fetchPosts(page)
    .then(json => {
      dispatch(addPosts(json));
    });
};