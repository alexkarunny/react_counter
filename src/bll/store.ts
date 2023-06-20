import {combineReducers, legacy_createStore} from 'redux';
import {counterReducer} from './counterReducer';

const rootReducer = combineReducers({
    counter: counterReducer
})

export type StateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)