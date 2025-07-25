import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import carsReducer from './cars/slice';
import favoritesReducer from './favorites/slice';

const favoritesConfig = {
  key: 'favorites',
  storage,
};

export const store = configureStore({
  reducer: {
    favorites: persistReducer(favoritesConfig, favoritesReducer),
    cars: carsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
