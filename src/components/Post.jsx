import React from 'react';


export const Post = ({ text, title }) =>
  <div className="post">
    <h2>{title}</h2>
    <div className="text">{text}</div>
  </div>

