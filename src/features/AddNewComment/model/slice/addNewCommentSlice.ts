import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddNewCommentSchema } from "../types/addNewComment";

const initialState: AddNewCommentSchema = {
    text: "",
    error: undefined,
};

export const addNewCommentSlice = createSlice({
    name: "addNewComment",
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(
    //             .fulfilled,
    //             (state, action: PayloadAction<>) => {
    //                 state.isLoading = false;
    //                 state.data = action.payload;
    //             }
    //         )
    //         .addCase(.rejected, (state, action) => {
    //             state.error = action.payload;
    //             state.isLoading = false;
    //         });
    // },
});

export const { actions: addNewCommentActions } = addNewCommentSlice;
export const { reducer: addNewCommentReducer } = addNewCommentSlice;
