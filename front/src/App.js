import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import { Provider } from 'react-redux';
import PostForm from './component/PostForm';
import GetEleve from './component/GetEleve';


import store from './store';

class App extends Component {
  componentWillMount() {
    fetch('');
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
           <div>
              <div class="body">
                <Route path="/" exact component={PostForm} />
                <Route path="/eleve/:_id" component={GetEleve} />
              </div>            
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App