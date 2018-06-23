import { combineReducers } from 'redux';
import user from './user';
import messages from './messages';
import typing from './typing';
import contacts from './contacts';
import activeUserId from './activeUserId';

export default combineReducers({
  user,
  messages,
  typing,
  contacts,
  activeUserId,
});
