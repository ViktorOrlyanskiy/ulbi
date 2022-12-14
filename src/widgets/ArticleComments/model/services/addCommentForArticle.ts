import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Comment } from "@/entities/Comment";
import { getUserAuthData } from "@/entities/User";
import { getArticleDetailsData } from "@/features/FetchArticleById";

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>(
    "addNewComment/addCommentForArticle",

    async (text, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData && !text && !article) {
            return rejectWithValue("no data");
        }

        try {
            const response = await extra.api.post<Comment>("/comments", {
                articleId: article?.id,
                userId: userData?.id,
                text,
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
