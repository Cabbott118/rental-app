import { configureStore } from '@reduxjs/toolkit';
import userReduser from '../features/authentication/slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReduser,
  },
});
