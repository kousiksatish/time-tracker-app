export default function timeTrackerReducer(state = {}, action) {
    switch(action.type) {
        case "INOUT_TOGGLE":
            const timeTracker = { ...state.timeTracker, inOffice: !state.timeTracker.inOffice};
            return { timeTracker };
        default:
            return state;
    }
}