// Modules
import { takeEvery, fork } from "redux-saga/effects";

// Sagas
import { dispatchSaga } from "../routes/home/modules/sagas";

/**
 * This saga will wait until DISPATCH message is dispatched and then go to function.
 * @returns {IterableIterator<*|ForkEffect>}
 */
export function* rootSaga() {
    // for logging purposes...
    yield takeEvery("*", logActionType);

    // route sagas
    yield fork(dispatchSaga);
}

const logActionType = ({type, payload}) => console.debug(' *** Action is dispatched now! *** ', type);

