// src/app/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './authReducer';
import ragister from './RagisterReducer';
import darkmode from './DarkmodeReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'ragister', 'darkmode'],
};

const rootReducer = combineReducers({
  auth: auth,
  ragister: ragister,
  darkmode: darkmode,
});

export default persistReducer(persistConfig, rootReducer);
