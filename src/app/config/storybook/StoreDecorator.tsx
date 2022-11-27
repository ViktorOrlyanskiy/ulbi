import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername";
import { profileReducer } from "features/EditableProfileCard";
import { addNewCommentReducer } from "features/AddNewComment";
import { ReducersList } from "shared/hooks";
import { articleCommentsReducer } from "widgets/ArticleComments";
import { articlesReducer } from "features/FetchArticles";
import { sortingArticlesReducer } from "features/SortingArticles";
import { recommendedArticlesReducer } from "features/FetchRecommendedArticles";
import { articleDetailsReducer } from "features/FetchArticleById";

// Асинхронные редюсеры
const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    addNewComment: addNewCommentReducer,

    articles: articlesReducer,
    sortingArticles: sortingArticlesReducer,
    recommendedArticles: recommendedArticlesReducer,
    articleDetails: articleDetailsReducer,
    articleComments: articleCommentsReducer,
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
