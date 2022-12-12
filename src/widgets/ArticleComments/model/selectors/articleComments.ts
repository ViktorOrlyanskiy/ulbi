import { StateSchema } from "@/app/providers/StoreProvider";

export const getArticleCommentsIsLoading = (state: StateSchema) =>
    state.articleComments?.isLoading || false;

export const getArticleCommentsError = (state: StateSchema) =>
    state.articleComments?.error;
