import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import UserReducer from './UserReducer';
import ProfileCreatorReducer from './ProfileCreatorReducer';

const reducer = combineReducers({
    // user: UserReducer,
    form: ProfileCreatorReducer
   
})

export default reducer;