import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleView, ArticleSort, ArticleType } from "@/entities/Article";
import {
    LOCAL_STORAGE_ARTICLES_SORT,
    LOCAL_STORAGE_ARTICLES_ORDER,
    LOCAL_STORAGE_ARTICLES_VIEW,
    LOCAL_STORAGE_ARTICLES_SEARCH,
    LOCAL_STORAGE_ARTICLES_TYPE,
} from "@/shared/const";
import { SortOrder } from "@/shared/types";
import { checksEquality } from "../../lib/checksEquality";
import { SortingArticlesSchema } from "../types/sortingArticlesSchema";

const initialState: SortingArticlesSchema = {
    sort: ArticleSort.CREATED,
    order: "asc",
    view: ArticleView.GRID,
    search: "",
    type: ArticleType.ALL,
    _inited: false,
};

export const sortingArticlesSlice = createSlice({
    name: "sortingArticles",
    initialState,
    reducers: {
        setSort: (state, action: PayloadAction<ArticleSort>) => {
            state.sort = action.payload;
            localStorage.setItem(LOCAL_STORAGE_ARTICLES_SORT, action.payload);
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
            localStorage.setItem(LOCAL_STORAGE_ARTICLES_ORDER, action.payload);
        },
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW, action.payload);
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
            localStorage.setItem(LOCAL_STORAGE_ARTICLES_SEARCH, action.payload);
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
            localStorage.setItem(LOCAL_STORAGE_ARTICLES_TYPE, action.payload);
        },

        initState: (state, { payload }: PayloadAction<any>) => {
            const defaultSort =
                (localStorage.getItem(
                    LOCAL_STORAGE_ARTICLES_SORT
                ) as ArticleSort) || ArticleSort.CREATED;
            state.sort = checksEquality<ArticleSort>(payload.sort, defaultSort);

            const defaultOrder =
                (localStorage.getItem(
                    LOCAL_STORAGE_ARTICLES_ORDER
                ) as SortOrder) || "asc";
            state.order = checksEquality<SortOrder>(
                payload.order,
                defaultOrder
            );

            const defaultSearch =
                (localStorage.getItem(
                    LOCAL_STORAGE_ARTICLES_SEARCH
                ) as string) ?? "";
            state.search = checksEquality<string>(
                payload.search,
                defaultSearch
            );

            const defaultType =
                (localStorage.getItem(
                    LOCAL_STORAGE_ARTICLES_TYPE
                ) as ArticleType) || ArticleType.ALL;
            state.type = checksEquality<ArticleType>(payload.type, defaultType);

            state.view =
                (localStorage.getItem(
                    LOCAL_STORAGE_ARTICLES_VIEW
                ) as ArticleView) || ArticleView.GRID;

            state._inited = true;
        },
    },
});

export const { actions: sortingArticlesActions } = sortingArticlesSlice;
export const { reducer: sortingArticlesReducer } = sortingArticlesSlice;
