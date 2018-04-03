import devToolsEnhancer from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { AsyncStorage } from 'react-native';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import { navMiddleware } from './navigationRedux';

const persistConfig = {
  key: 'procmaster',
  storage: AsyncStorage,
  blacklist: ['nav'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(thunk, sagaMiddleware, navMiddleware),
  devToolsEnhancer({
    name: 'procmaster',
    realtime: true,
  }),
);


const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };

