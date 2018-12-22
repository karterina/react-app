// Modules
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

/**
 * A Basic Reducer Function
 * Reducers are functions that update the state / store with new data
 * @param state
 * @param action
 * @returns {*}
 */
function basicReducer(state, action) {
    const newState = { ...state };

    switch (action.type) {
        case "FETCH_API_LOADING":
            newState.api = {
                status: "loading"
            };
            break;
        case "FETCH_API_SUCCESS":
            newState.api = {
                status: "success",
                action
            };
            break;

        case "FETCH_API_ERROR":
            newState.api = {
                status: "error",
                action
            };
            break;

        default:
            return newState;
    }

    return newState;
}

/**
 * Export all reducers of the application as 1 combined reducers object
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
export const reducers = combineReducers({
    routing: routerReducer,
    data: basicReducer
});
