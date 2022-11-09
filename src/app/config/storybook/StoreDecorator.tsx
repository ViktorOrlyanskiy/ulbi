import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername";
import { profileReducer } from "features/EditableProfileCard";
import { articleDetailsCommentsReducer } from "features/FetchArticleDetailsComments";
import { addNewCommentReducer } from "features/AddNewComment";
import { articleDetailsReducer } from "entities/Article";
import { ReducersList } from "shared/hooks";

// Асинхронные редюсеры
const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
    addNewComment: addNewCommentReducer,
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
