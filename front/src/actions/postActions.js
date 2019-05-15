import { FETCH_POSTS, NEW_POST } from './actions';
import axios from 'axios';
//import 'whatwg-fetch'

export const fetchPosts = () => dispatch => {
  console.log('fetching');

  fetch('http://localhost:8070/eleve')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
    console.log('action called',postData);
    axios({
        method: 'post',
        url: 'http://localhost:8070/eleve',
        data: postData
      })

    // fetch('https://localhost:8070/eleve', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(postData)
    //  })
      .then(res => res.json())
      .then(post =>
        dispatch({
          type: NEW_POST,
          payload: post
        })
      );
  };