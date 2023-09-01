import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// import { topicApi } from '../../utils/TopicApi';
// import { notAuthRequest } from '../../utils/NotAuthRequest';

// export const fetchAddMessageInTopic = createAsyncThunk(
//   'page/fetchAddMessageInTopic',
//   async (params, thunkAPI) => {
//     const data = await topicApi.addMessageInTopic(params);
//     return data;
//   }
// );

const initialState = {
  department: {
    titleDepartment: '1-ое отделение',
    equipmentGroup: [
      {
        listEquipment: [
          { titleEquipment: 'Грохот кокса' },
          { titleEquipment: 'Грохот кварцита 3-е отделение' },
          { titleEquipment: 'Грохот квацита 1-е отделение' },
        ],
        titleGroup: 'Узел расссева',
      },
    ],
  },
};

const departmentSlice = createSlice({
  name: 'department',
  initialState,
  reducers: {
    killAllStateTopic(state) {
      state.department = '';
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchAddMessageInTopic.pending, (state) => {
    //   console.log('отправка message');
    //   state.showPreloader = true;
    // });
    // builder.addCase(fetchAddMessageInTopic.fulfilled, (state, { payload }) => {
    //   state.showPreloader = false;
    // });
    // builder.addCase(fetchAddMessageInTopic.rejected, (state, action) => {
    //   console.log('ошибка отправки message');
    //   state.showPreloader = false;
    //   state.textAnswerRequest = 'при отправки сообщения произошла ошибка';
    // });
  },
});

export const selectDepartment = (state) => state.department;
export const { killAllStateTopic } = departmentSlice.actions;
export default departmentSlice.reducer;
