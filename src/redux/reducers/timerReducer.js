export default function timerReducer(state = {
    minutes: 3,
    seconds: 20
}, action) {
    switch(action.type) {
        case "TICK_TIMER":
            // console.log('here' + JSON.stringify(action))
            let newMin = state.minutes;
            let newSec = state.seconds;
            if (state.seconds === 0) {
                newSec = 59;
                newMin = newMin - 1;
            } else {
                newSec = newSec - 1;
            }
            // console.log(`new ${newMin} : ${newSec}`);
            return {
                ...state,
                minutes: newMin,
                seconds: newSec
            }
        default:
            return state;
    }
}