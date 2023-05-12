import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

// Services
import { pokemonApi } from '../services/pokemonServices';
import { userApi } from '../services/userServices';

// Reducers
import userReduser from '../features/authentication/slices/userSlice';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    user: userReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware, userApi.middleware),
});

setupListeners(store.dispatch);
