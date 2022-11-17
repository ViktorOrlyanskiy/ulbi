import { StateSchema } from "app/providers/StoreProvider";

export const getArticlesView = (state: StateSchema) => state.articles?.view;

export const getArticlesIsLoading = (state: StateSchema) =>
    state.articles?.isLoading || false;

export const getArticlesError = (state: StateSchema) => state.articles?.error;
