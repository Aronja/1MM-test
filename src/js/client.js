import React from 'react'
import { render } from 'react-dom'
import oneMillionMentorsApp from './reducers'
import Layout from './pages/Layout'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {Router, Route, IndexRoute, hashHistory } from 'react-router'
import './../css/style.css';
import './../css/normalize.css';
import './../css/grid.css';

let store = createStore(oneMillionMentorsApp)

const app = document.getElementById('app');

render(<Provider store={store}>
  <Router history={hashHistory}>
    <Route path='/'>
      <IndexRoute component={Layout}></IndexRoute>
    </Route>
  </Router>
</Provider>, app);
