import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import Auth from './Auth';


export default combineReducers({
  Auth,
  routing: routerReducer,
  form: formReducer,
});
