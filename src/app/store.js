import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

// Services
import { pokemonApi } from '../services/pokemon/pokemonServices';
import { api } from '../services/baseService';

// Reducers
// import userReducer from '../features/authentication/slices/userSlice';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [api.reducerPath]: api.reducer,
    // user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware, api.middleware),
});

setupListeners(store.dispatch);
