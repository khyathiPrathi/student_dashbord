import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slice/userSlice';


const appstore = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  
});

export default appstore;