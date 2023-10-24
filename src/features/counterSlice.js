import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: 0
}

export const counterSlicer = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value  += 1;
        },
        decrement: (state) => {
            state.value  -= 1;
        },
        incrementBy: (state, action)=>{
            state.value += action.payload;
        },
        decrementBy: (state, action)=>{
            state.value -= action.payload;
        }
    }
})

export const { increment, decrement, incrementBy, decrementBy } = counterSlicer.actions;

export default counterSlicer.reducer;