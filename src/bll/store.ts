import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import {counterReducer} from './counterReducer';
import thunk from 'redux-thunk';
import {loadState, saveState} from '../utils/localstorage-utils';
import {settingsReducer} from './settingsReducer';

//reducer
const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer
})

//store
export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunk))

//localStorage
store.subscribe(() => {
    saveState({
        counter: store.getState().counter,
        settings: store.getState().settings
    });
})

//type
export type StateType = ReturnType<typeof rootReducer>


