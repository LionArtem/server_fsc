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
  date: '',
};

const departmentSlice = createSlice({
  name: 'department',
  initialState,
  reducers: {
    killAllStateTopic(state) {
      state.messageValue = '';
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
export const { addAuthorTopic } = departmentSlice.actions;
export default departmentSlice.reducer;
