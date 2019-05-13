import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './component/Posts';
import PostForm from './component/PostForm';

import store from './store';

class App extends Component {
  componentWillMount() {
    fetch('');
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;