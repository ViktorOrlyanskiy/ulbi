import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article, ArticleType } from "entities/Article";
import {
    getArticlesLimit,
    getArticlesOrder,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
} from "../selectors/getArticles";

interface FetchArticlesListProps {
    page?: number;
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
>(
    "articles/fetchArticlesList",

    async (props, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const { page = 1 } = props;
        const limit = getArticlesLimit(getState());
        const sort = getArticlesSort(getState());
        const order = getArticlesOrder(getState());
        const search = getArticlesSearch(getState());
        const type = getArticlesType(getState());

        try {
            const response = await extra.api.get<Article[]>("/articles", {
                params: {
                    _expand: "user",
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type,
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
