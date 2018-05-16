import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } fom 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
