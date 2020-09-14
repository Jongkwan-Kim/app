import { combineReducers } from 'redux';
import { auth } from './auth';

const appReducer = combineReducers({
    auth
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        // state.auth = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;