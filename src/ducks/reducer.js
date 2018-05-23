import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ProfileCreatorReducer from './ProfileCreatorReducer';

const reducer = combineReducers({
    form: ProfileCreatorReducer
   
})

export default reducer;