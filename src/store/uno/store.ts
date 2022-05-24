import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

type t_unoStore = {
    run: boolean
}

const initialState: t_unoStore = {
    run: false
}

export const unoSlice = createSlice({
    name: 'uno',
    initialState,
    reducers: {
        start:(state) => {
            state.run = true;
        },
        stop: (state) => {
            state.run = false;
        }
    }
})

export const {stop,start} = unoSlice.actions;

export const selectIsRunning = (state: RootState) => state.uno.run;

export default unoSlice.reducer;
