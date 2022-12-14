import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

import { LoginSchema } from "@/features/AuthByUsername";
import { CounterSchema } from "@/entities/Counter";
import { UserSchema } from "@/entities/User";
import { AddNewCommentSchema } from "@/features/AddNewComment";
import { ArticleCommentsSchema } from "@/widgets/ArticleComments";
import { ArticlesSchema } from "@/features/FetchArticles";
import { PageSchema } from "@/widgets/Page";
import { SortingArticlesSchema } from "@/features/SortingArticles";
import { RecommendedArticlesSchema } from "@/features/FetchRecommendedArticles";
import { ArticleDetailsSchema } from "@/features/FetchArticleById";
import { ProfileSchema } from "@/features/EditableProfileCard";
import { $rtkApi } from "@/shared/api/rtkApi";

export interface StateSchema {
    [$rtkApi.reducerPath]: ReturnType<typeof $rtkApi.reducer>;
    counter: CounterSchema;
    user: UserSchema;
    page: PageSchema;

    // Aсинхронные редюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;

    addNewComment?: AddNewCommentSchema;

    articles?: ArticlesSchema;
    sortingArticles?: SortingArticlesSchema;
    recommendedArticles?: RecommendedArticlesSchema;
    articleDetails?: ArticleDetailsSchema;
    articleComments?: ArticleCommentsSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
