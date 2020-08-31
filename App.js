import React,{Component} from 'react';
import Home from './src/compornent/Home'
import {Provider} from 'react-redux';
import {store} from './src/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}
