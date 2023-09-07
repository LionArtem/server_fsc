import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { departmentApi } from '../../utils/DepartmentApi';
import { notAuthRequest } from '../../utils/NotAuthRequest';

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
    const data = await notAuthRequest.getAllDepartment();
    return data;
  }
);

export const fetchGetDepartmentId = createAsyncThunk(
  'page/fetchGetDepartmentId',
  async (params, thunkAPI) => {
    const data = await notAuthRequest.getDepartmentId(params);
    return data;
  }
);

export const fetchAddEquipmentDepartment = createAsyncThunk(
  'page/fetchAddEquipmentDepartment',
  async (params, thunkAPI) => {
    const data = await departmentApi.addEquipmentDepartment(params);
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
    // killAllStateDepartment(state) {
    //   state.department = {};
    //   state.ListDepartment = [];
    // },
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

    builder.addCase(fetchAddEquipmentDepartment.pending, (state) => {
      console.log('добавление группы оборудования');
      // state.showPreloader = true;
    });
    builder.addCase(
      fetchAddEquipmentDepartment.fulfilled,
      (state, { payload }) => {
        // state.showPreloader = false;
        console.log(payload);
      }
    );
    builder.addCase(fetchAddEquipmentDepartment.rejected, (state, action) => {
      console.log('ошибка добавления группы оборудования');
      // state.showPreloader = false;
      // state.textAnswerRequest = 'при отправки сообщения произошла ошибка';
    });
  },
});

export const selectDepartment = (state) => state.department;
export const { addDepartment } = departmentSlice.actions;
export default departmentSlice.reducer;
