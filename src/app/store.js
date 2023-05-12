import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

// Services
import { pokemonApi } from '../services/pokemonServices';

// Reducers
import userReduser from '../features/authentication/slices/userSlice';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    user: userReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);
