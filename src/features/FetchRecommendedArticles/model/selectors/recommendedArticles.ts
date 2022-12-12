import { StateSchema } from "@/app/providers/StoreProvider";

export const getRecommendedArticlesIsLoading = (state: StateSchema) =>
    state.articles?.isLoading || false;

export const getRecommendedArticlesError = (state: StateSchema) =>
    state.articles?.error;
