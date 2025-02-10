

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counters/counterSlice.js';

export const store = configureStore({
    reducer: {
        counter: counterReducer

    }
});


