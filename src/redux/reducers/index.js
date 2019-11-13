import { combineReducers } from 'redux';
import timeTracker from './timeTrackerReducer';
import timer from './timerReducer';

const rootReducer = combineReducers({
    timeTracker,
    timer
});

export default rootReducer;