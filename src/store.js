import {reducers} from './reducer/reducer';
import {createStore} from 'redux'

export const store = createStore(reducers)
