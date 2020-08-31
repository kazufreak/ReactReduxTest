import React from 'react';
import Home from './src/compornent/Home'
import {Provider} from 'react-redux';
import {store} from './src/store';

const store = createStore(taskReducer)

export default function App() {
  return (
    <Provider store = {store}>
      <Home></Home>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
