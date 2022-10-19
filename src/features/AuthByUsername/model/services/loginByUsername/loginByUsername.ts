import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";

// если сервер присылает разные коды, можно создать перечисления для каждого кода

export interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>(
    "login/loginByUsername",

    async (authData, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.post("/login", authData);

            if (!response.data) {
                throw new Error("response empty data");
            }

            dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            console.log(e);

            return rejectWithValue("error");
        }
    }
);
