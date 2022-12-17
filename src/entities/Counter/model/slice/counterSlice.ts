import { PayloadAction } from "@reduxjs/toolkit";
import { buildSlice } from "@/shared/lib";
import { CounterSchema } from "../types/counterSchema";

export interface CounterState {
    value: number;
}

const initialState: CounterSchema = {
    value: 0,
};

export const counterSlice = buildSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        addFive: (state, { payload }: PayloadAction<number>) => {
            state.value += payload;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { actions: counterActions } = counterSlice;
export const { useActions: useCounterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
