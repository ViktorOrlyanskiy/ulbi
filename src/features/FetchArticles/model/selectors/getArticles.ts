import { StateSchema } from "app/providers/StoreProvider";

export const getArticlesView = (state: StateSchema) => state.articles?.view;

export const getArticlesIsLoading = (state: StateSchema) =>
    state.articles?.isLoading || false;

export const getArticlesError = (state: StateSchema) => state.articles?.error;

export const getArticlesPage = (state: StateSchema) =>
    state.articles?.page || 1;

export const getArticlesLimit = (state: StateSchema) =>
    state.articles?.limit || 9;

export const getArticlesHasMore = (state: StateSchema) =>
    state.articles?.hasMore;