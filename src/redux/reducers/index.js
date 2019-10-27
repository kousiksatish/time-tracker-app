import { combineReducers } from 'redux';
import timeTracker from './timeTrackerReducer';

const rootReducer = combineReducers({
    timeTracker: timeTracker
});

export default rootReducer;