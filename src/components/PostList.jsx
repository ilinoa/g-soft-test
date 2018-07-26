import React from 'react';
import {Post} from './Post';


export const PostsList = ({ posts, isFetching }) =>
  <div className="posts-list">
    {posts.map((value, key) =>
        <Post key={key} text={value.body} title={value.title} />
      )}
    {isFetching ?
      <div className="loading">
        Loading...
      </div> : ""
    }
  </div>
