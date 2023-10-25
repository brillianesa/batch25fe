import { configureStore } from '@reduxjs/toolkit';
import  counterSlicer  from '../features/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlicer
    }
})