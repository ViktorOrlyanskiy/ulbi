// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { ThunkConfig } from "app/providers/StoreProvider";
// import { getArticleDetailsData } from "entities/Article";
// import { Comment } from "entities/Comment";
// import { getUserAuthData } from "entities/User";
// import { useAppDispatch } from "shared/hooks";
// import { getNewCommentText } from "../selectors/addNewComment";
// import { addNewCommentActions } from "../slice/addNewCommentSlice";

// export const sendComment = createAsyncThunk<Comment, void, ThunkConfig<string>>(
//     "addNewComment/sendComment",

//     async (_, thunkAPI) => {
//         const { extra, rejectWithValue, getState } = thunkAPI;
//         const dispatch = useAppDispatch();
//         const userData = getUserAuthData(getState());
//         const text = getNewCommentText(getState());
//         const article = getArticleDetailsData(getState());

//         if (!userData && !text && !article) {
//             return rejectWithValue("no data");
//         }

//         try {
//             const response = await extra.api.post<Comment>("/comments", {
//                 articleId: article?.id,
//                 userId: userData?.id,
//                 text,
//             });

//             if (!response.data) {
//                 throw new Error();
//             }

//             dispatch(addNewCommentActions.setText(""));

//             return response.data;
//         } catch (e) {
//             return rejectWithValue("error");
//         }
//     }
// );
