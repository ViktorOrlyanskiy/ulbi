import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article, ArticleView } from "entities/Article";
import { LOCAL_STORAGE_ARTICLES_VIEW } from "shared/const/localStorage";
import { fetchArticlesList } from "../services/fetchArticlesList";
import { ArticlesSchema } from "../types/articlesSchema";

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articles || articlesAdapter.getInitialState()
);

export const articlesSlice = createSlice({
    name: "articles",
    initialState: articlesAdapter.getInitialState<ArticlesSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.GRID,
        page: 1,
        hasMore: true,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        initView: (state) => {
            const view =
                (localStorage.getItem(
                    LOCAL_STORAGE_ARTICLES_VIEW
                ) as ArticleView) || ArticleView.GRID;
            state.view = view;
            state.limit = view === ArticleView.LIST ? 4 : 9;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticlesList.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    articlesAdapter.addMany(state, action.payload);
                    state.hasMore = action.payload.length > 0;
                }
            )
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: articlesActions } = articlesSlice;
export const { reducer: articlesReducer } = articlesSlice;
