import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch