import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { ArticleSort, ArticleType } from "entities/Article";
import { SortOrder } from "shared/types";
import {
    getArticlesHasMore,
    getArticlesIsLoading,
    getArticlesPage,
} from "../../selectors/getArticles";
import { articlesActions } from "../../slice/articlesSlice";
import { fetchArticlesList } from "../fetchArticlesList";

interface FetchNextArticlesProps {
    sort: ArticleSort;
    order: SortOrder;
    search: string;
    type: ArticleType;
}

export const fetchNextArticles = createAsyncThunk<
    void,
    FetchNextArticlesProps,
    ThunkConfig<string>
>(
    "articles/fetchNextArticles",

    async (props, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const { sort, order, search, type } = props;
        const page = getArticlesPage(getState());
        const hasMore = getArticlesHasMore(getState());
        const isLoading = getArticlesIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesActions.setPage(page + 1));
            dispatch(
                fetchArticlesList({
                    sort,
                    order,
                    search,
                    type,
                    page: page + 1,
                    replace: false,
                })
            );
        }
    }
);
