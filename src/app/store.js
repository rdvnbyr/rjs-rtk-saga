import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from '@redux-saga/core';
import authReducer from '../features/auth/authSlice';
import { rootSaga } from './root-saga';
// import storage from 'redux-persist/lib/storage';
import storage from 'reduxjs-toolkit-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';

const persistAuthConfig = {
  key: 'rtk-saga-auth',
  storage,
  whitelist: ['user', 'isAuthenticated', 'token'],
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: persistReducer(persistAuthConfig, authReducer),
  },
  middleware: [sagaMiddleware],
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
  // enhancers: [],
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
