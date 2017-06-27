import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // concat is different from push
            // we don't use push because we mustn't mutates the state here
            // "push" mutates the state / concat creates a new version (instance) of the state
            
            // return state.concat([action.payload.data]);
            // ES6 syntax
            return [ action.payload.data, ...state ]; // [city, city, city] and NOT [city, [city, city]]
            break;
        default:

    }
    return state;
}
