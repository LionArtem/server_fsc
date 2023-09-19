import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { usersApi } from '../../utils/UserApi';

export const fetchGetUser = createAsyncThunk(
  'page/fetchGetUser',
  async (params, thunkAPI) => {
    const data = await usersApi.getUserMe(params);
    return data;
  }
);

const initialState = {
  user: {},
  logIn: false,
  admin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    killAllStateUser(state) {
      state.user = {};
      state.logIn = false;
    },
  },
  extraReducers: (builder) => {
    // запрос на получение текущего пользователя
    builder.addCase(fetchGetUser.pending, (state) => {
      console.log('запрос на получение пользователя');
      //state.showSceletonPage = true;
    });
    builder.addCase(fetchGetUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.logIn = true;
      // localStorage.setItem('userId', payload._id);
      // state.showSceletonPage = false;
    });
    builder.addCase(fetchGetUser.rejected, (state, action) => {
      console.log('ошибка запроса на получение пользователя');
    });
  },
});

export const selectUser = (state) => state.user;

export const { killAllStateUser } = userSlice.actions;
export default userSlice.reducer;
