import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import {
    getArticlesHasMore,
    getArticlesIsLoading,
    getArticlesPage,
} from "../../selectors/getArticles";
import { articlesActions } from "../../slice/articlesSlice";
import { fetchArticlesList } from "../fetchArticlesList";

export const fetchNextArticles = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    "articles/fetchNextArticles",

    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const page = getArticlesPage(getState());
        const hasMore = getArticlesHasMore(getState());
        const isLoading = getArticlesIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesActions.setPage(page + 1));
            dispatch(fetchArticlesList({ page: page + 1 }));
        }
    }
);
