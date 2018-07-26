import fetch from 'isomorphic-fetch';


export const fetchPosts = (page) =>
    fetch(`https://jsonplaceholder.typicode.com/posts?page=${page}`)
      .then(response => response.json());
