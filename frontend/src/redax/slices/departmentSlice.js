import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { departmentApi } from '../../utils/DepartmentApi';

export const fetchAddNewDepartment = createAsyncThunk(
  'page/fetchAddNewDepartment',
  async (params, thunkAPI) => {
    const data = await departmentApi.addNewDepartment(params);
    return data;
  }
);

export const fetchGetAllDepartment = createAsyncThunk(
  'page/fetchGetAllDepartment',
  async (params, thunkAPI) => {
    const data = await departmentApi.getAllDepartment();
    return data;
  }
);

export const fetchGetDepartmentId = createAsyncThunk(
  'page/fetchGetDepartmentId',
  async (params, thunkAPI) => {
    const data = await departmentApi.getDepartmentId(params);
    return data;
  }
);

const initialState = {
  ListDepartment: [],
  department: {},
};

const departmentSlice = createSlice({
  name: 'department',
  initialState,
  reducers: {
    killAllStateTopic(state) {
      state.department = '';
    },
    addDepartment(state, action) {
      state.department = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAddNewDepartment.pending, (state) => {
      console.log('добавление отделения');
      // state.showPreloader = true;
    });
    builder.addCase(fetchAddNewDepartment.fulfilled, (state, { payload }) => {
      // state.showPreloader = false;
      console.log(payload);
    });
    builder.addCase(fetchAddNewDepartment.rejected, (state, action) => {
      console.log('ошибка добавления отделения');
      // state.showPreloader = false;
      // state.textAnswerRequest = 'при отправки сообщения произошла ошибка';
    });

    builder.addCase(fetchGetAllDepartment.pending, (state) => {
      console.log('получение списка всех отделений');
      // state.showPreloader = true;
    });
    builder.addCase(fetchGetAllDepartment.fulfilled, (state, { payload }) => {
      // state.showPreloader = false;
      state.ListDepartment = payload;
      console.log(payload);
    });
    builder.addCase(fetchGetAllDepartment.rejected, (state, action) => {
      console.log('ошибка получения списка всех отделений');
      // state.showPreloader = false;
      // state.textAnswerRequest = 'при отправки сообщения произошла ошибка';
    });

    builder.addCase(fetchGetDepartmentId.pending, (state) => {
      console.log('получение отделения по id');
      // state.showPreloader = true;
    });
    builder.addCase(fetchGetDepartmentId.fulfilled, (state, { payload }) => {
      // state.showPreloader = false;
      state.department = payload;
      // console.log(payload);
    });
    builder.addCase(fetchGetDepartmentId.rejected, (state, action) => {
      console.log('ошибка получения отделения по id');
      // state.showPreloader = false;
      // state.textAnswerRequest = 'при отправки сообщения произошла ошибка';
    });
  },
});

export const selectDepartment = (state) => state.department;
export const { killAllStateTopic, addDepartment } = departmentSlice.actions;
export default departmentSlice.reducer;
