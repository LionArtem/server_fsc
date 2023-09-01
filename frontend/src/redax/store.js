import { configureStore } from '@reduxjs/toolkit';
import department from './slices/departmentSlice';
// import auth from './slices/authSlice';
// import user from './slices/userSlice';
// import formValidetion from './slices/formValidetionSlice';
// import pagination from './slices/paginationSlice';

export const store = configureStore({
  reducer: { department },
});
