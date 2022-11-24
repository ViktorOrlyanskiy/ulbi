import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

import { LoginSchema } from "features/AuthByUsername";
import { ArticleDetailsSchema } from "entities/Article";
import { CounterSchema } from "entities/Counter";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { AddNewCommentSchema } from "features/AddNewComment";
import { ArticleCommentsSchema } from "widgets/ArticleComments";
import { ArticlesSchema } from "features/FetchArticles";
import { PageSchema } from "widgets/Page";
import { SortingArticlesSchema } from "features/SortingArticles";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    page: PageSchema;

    // Aсинхронные редюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    articleComments?: ArticleCommentsSchema;
    articles?: ArticlesSchema;
    addNewComment?: AddNewCommentSchema;
    sortingArticles?: SortingArticlesSchema;
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
