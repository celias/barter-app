import { combineReducers } from 'redux';
import UserReducer from './UserReducer';

const reducer = combineReducers({
    user: UserReducer
    // user_profile: UserProfileReducer,
})

export default reducer;