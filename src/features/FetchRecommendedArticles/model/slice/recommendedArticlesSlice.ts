import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article, ArticleView } from "entities/Article";
import { fetchRecommendedArticles } from "../services/fetchRecommendedArticles";
import { RecommendedArticlesSchema } from "../types/recommendedArticlesSchema";

const recommendedArticlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getRecommendedArticles =
    recommendedArticlesAdapter.getSelectors<StateSchema>(
        (state) =>
            state.recommendedArticles || recommendedArticlesAdapter.getInitialState()
    );

export const recommendedArticlesSlice = createSlice({
    name: "fetchRecommendedArticles",
    initialState:
        recommendedArticlesAdapter.getInitialState<RecommendedArticlesSchema>({
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
            view: ArticleView.GRID,
        }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommendedArticles.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchRecommendedArticles.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendedArticlesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchRecommendedArticles.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: recommendedArticlesActions } = recommendedArticlesSlice;
export const { reducer: recommendedArticlesReducer } = recommendedArticlesSlice;
