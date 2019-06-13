import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';
import logger from 'redux-logger';
import config from 'Util/config';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
if (config.debug) {
    middlewares.push(logger);
}

export function configureStore(initialState) {
    const store = createStore(reducers, initialState, compose(applyMiddleware(...middlewares)));

    sagaMiddleware.run(sagas);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
