import { fetchApiGET } from "../../../services/api/apiSagas";
import { take, call } from "redux-saga/effects";

/**
 *
 * @returns {IterableIterator<*>}
 */
export function* dispatchSaga() {
    while(true) {
        const action = yield take("DISPATCH");
        const request = transformer(action);
        // Call the function for doing the request
        yield call(fetchApiGET, request);
    }
}

/**
 * Transformer: transform data into request data
 * @returns {{url: string}}
 */
const transformer = (action) => ({ url: "https://api.github.com" });
