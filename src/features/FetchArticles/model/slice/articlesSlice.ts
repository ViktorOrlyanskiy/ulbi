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
    name: "fetchArticles",
    initialState: articlesAdapter.getInitialState<ArticlesSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.GRID,
        page: 1,
        limit: 9,
        hasMore: true,
        _inited: false, // чтобы не загружать данные если true
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        initState: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            state.page = 1;
            state.limit = action.payload === ArticleView.LIST ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: articlesActions } = articlesSlice;
export const { reducer: articlesReducer } = articlesSlice;
