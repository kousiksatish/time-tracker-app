import { createStore } from 'redux';
import rootReducer from './reducers';

export default function configureStore(initiaState) {
    return createStore(rootReducer, initiaState);
}