import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article, ArticleSort, ArticleType } from "@/entities/Article";
import { SortOrder } from "@/shared/types";
import { getArticlesHasMore, getArticlesLimit } from "../selectors/getArticles";

interface FetchArticlesListProps {
    sort: ArticleSort;
    order: SortOrder;
    search: string;
    type: ArticleType;
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
        const { sort, order, search, type, page = 1 } = props;
        const limit = getArticlesLimit(getState());

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
