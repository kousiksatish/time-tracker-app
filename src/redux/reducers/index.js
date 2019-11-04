import { combineReducers } from 'redux';
import timeTracker from './timeTrackerReducer';

const rootReducer = combineReducers({
    timeTracker
});

export default rootReducer;