// Modules
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

// Reducers
import { reducers } from "./reducers";

// Saga
import { rootSaga } from "./sagas";

// Create and Apply the Middlewares
const sagaMiddleware = createSagaMiddleware();
const middleWare = applyMiddleware(sagaMiddleware);

// The state of the application on start
const initialState = {
    data: {
        api: {
            status: 'initialized'
        }
    }
};

// Create the Redux Store
const store = createStore(reducers, initialState, middleWare);

// Start Sagas
sagaMiddleware.run(rootSaga);

export { store };
