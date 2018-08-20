import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import tasks from './tasksReducer'

const rootReducer = combineReducers({
      ajaxCallsInProgress , tasks
});

export default rootReducer;
