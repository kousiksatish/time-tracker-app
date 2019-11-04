export default function timeTrackerReducer(state = {}, action) {
    switch(action.type) {
        case "INOUT_TOGGLE":
            return { ...state, inOffice: !state.inOffice};
        default:
            return state;
    }
}