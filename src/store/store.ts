import { configureStore } from '@reduxjs/toolkit';
import unoReducer from './uno/store';

export const store = configureStore({
    reducer: {
        uno: unoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
