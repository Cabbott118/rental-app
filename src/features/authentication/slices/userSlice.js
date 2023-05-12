import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GET_USER_BY_ID } from '../../../data/constants';
import { get } from '../../../lib/axios';

const fetchUser = createAsyncThunk('user/fetchUser', async (id) => {
  const response = await get(GET_USER_BY_ID, { userId: id });
  return response;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    authenticated: false,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.authenticated = true;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
export const selectUser = (state) => state.user;

export { fetchUser };
