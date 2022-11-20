import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesInited } from "../selectors/getArticles";
import { articlesActions } from "../slice/articlesSlice";
import { fetchArticlesList } from "./fetchArticlesList";

export const initArticlesList = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    "articles/initArticlesList",

    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const inited = getArticlesInited(getState());

        if (!inited) {
            dispatch(articlesActions.initView());
            dispatch(fetchArticlesList({ page: 1 }));
        }
    }
);
