import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import candyReducer from './candy/candyReducer';
import userReducer from './users/userReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    candy: candyReducer,
    user: userReducer
})

export default rootReducer;