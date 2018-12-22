import api from "axios";
import { call, put } from "redux-saga/effects";
import {FETCH_API_ERROR, FETCH_API_LOADING, FETCH_API_SUCCESS} from "./constants";

// Utils
import {notify} from "../../@shared/utils/notify";

const headers = {
    headers: {
        //Authorization:
        //Add Token here
    }
};

/**
 * Saga that handles GET requests
 * @param action
 * @returns {IterableIterator<*|CallEffect>}
 */
export function* fetchApiGET(action) {
    yield put({ type: FETCH_API_LOADING });
    notify('Calling the API...');
    try {
        const result = yield call(api.get, action.url, headers);
        notify('We called the API succesfully!', 'success', () => console.log('callback clean notifier'));
        yield put({ type: FETCH_API_SUCCESS, payload: result });
    } catch (error) {
        console.log("error", error);
        yield put({ type: FETCH_API_ERROR, payload: error });
    }
}
