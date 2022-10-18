import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "entities/User";

// если сервер присылает разные коды, можно создать перечисления для каждого кода

export interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }
>(
    "login/loginByUsername",

    async (authData, thunkAPI) => {
        try {
            const response = await axios.post(
                "http://localhost:8000/login",
                authData
            );

            if (!response.data) {
                throw new Error("response empty data");
            }

            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);

            return thunkAPI.rejectWithValue("error");
        }
    }
);
