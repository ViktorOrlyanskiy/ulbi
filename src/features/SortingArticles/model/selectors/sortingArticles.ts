import { StateSchema } from "app/providers/StoreProvider";
import { ArticleView, ArticleSort, ArticleType } from "entities/Article";

export const getSort = (state: StateSchema) =>
    state.sortingArticles?.sort || ArticleSort.CREATED;

export const getOrder = (state: StateSchema) =>
    state.sortingArticles?.order || "asc";

export const getView = (state: StateSchema) =>
    state.sortingArticles?.view || ArticleView.GRID;

export const getSearch = (state: StateSchema) =>
    state.sortingArticles?.search ?? "";

export const getType = (state: StateSchema) =>
    state.sortingArticles?.type || ArticleType.ALL;
