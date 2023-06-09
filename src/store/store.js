import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from '../greetingSlice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
