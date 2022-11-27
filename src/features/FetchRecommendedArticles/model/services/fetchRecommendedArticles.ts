import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";

export const fetchRecommendedArticles = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>(
    "articlesDetails/fetchRecommendedArticles",

    async (props, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Article[]>("/articles", {
                params: {
                    // _expand: "user",
                    _limit: 4,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue("error");
        }
    }
);
