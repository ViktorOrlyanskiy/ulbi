import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername";
import { profileReducer } from "features/EditableProfileCard";
import { addNewCommentReducer } from "features/AddNewComment";
import { articleDetailsReducer } from "entities/Article";
import { ReducersList } from "shared/hooks";
import { articleCommentsReducer } from "widgets/ArticleComments";
import { articlesReducer } from "features/FetchArticles";
import { sortingArticlesReducer } from "features/SortingArticles";

// Асинхронные редюсеры
const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleComments: articleCommentsReducer,
    articles: articlesReducer,
    addNewComment: addNewCommentReducer,
    sortingArticles: sortingArticlesReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
    (StoryComponent: Story) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        );
