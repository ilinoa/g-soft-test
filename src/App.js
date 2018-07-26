import React, { Component } from 'react';
import './App.css';
import PostListsContainer from './containers/PostsListsContainer';


class App extends Component {
  componentWillMount(){
    const { fetchPostData, currentPage } = this.props;
    fetchPostData(1);
    let isLoading=false;
    document.addEventListener('scroll', (e)=> {
        if (window.pageYOffset + document.documentElement.clientHeight === document.body.clientHeight && !isLoading) {
          isLoading = true;
          fetchPostData(currentPage);
          isLoading = false;
        }
    });
  }

  render() {
    return(
      <div className="content">
        <PostListsContainer />
      </div>
    )
  }
}

export default App;
