import { combineReducers } from 'redux';

import authenticate from './authenticate';
import messages from './messages';

export default combineReducers({
  authenticate,
  messages,
});