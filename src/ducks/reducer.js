import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import ProfileCreatorReducer from './ProfileCreatorReducer';

const reducer = combineReducers({
    user: UserReducer,
    form: ProfileCreatorReducer
})

export default reducer;