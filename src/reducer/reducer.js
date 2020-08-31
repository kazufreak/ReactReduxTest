import {combineReducers} from 'redux';

INITIAL_STATE = {
    name: 'Nanasi'
  }

const reducer = (state = INITIAL_STATE, action) => {  
    switch (action.type) {
      case 'ADD_NAME':
        return {...state, name: action.name}
      case 'DELETE_NAME':
        return {...state, name: ''}
      default:
        return state;
    }
  }

export const reducers = combineReducers({  
user: reducer
})