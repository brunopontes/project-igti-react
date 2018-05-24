// Combina os reducers
import {combineReducers} from 'redux';

import contatoReducer from '../contato/contatosReducer';

const rootReducer = combineReducers({
    todo: contatoReducer
});

export default rootReducer;