import { TestAsyncThunk } from "app/config/tests";
// import { fetchArticlesList } from "../fetchArticlesList";
// import { fetchNextArticles } from "./fetchNextArticles";

// jest.mock("../fetchArticlesList");

// describe("fetchNextArticles", () => {
//     test("success", async () => {
//         const thunk = new TestAsyncThunk(fetchNextArticles, {
//             articles: {
//                 page: 2,
//                 ids: [],
//                 entities: {},
//                 limit: 5,
//                 isLoading: false,
//                 hasMore: true,
//                 _inited: false,
//             },
//         });
//         await thunk.callThunk();

//         expect(thunk.dispatch).toBeCalledTimes(4);
//         expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
//     });

//     test("not called", async () => {
//         const thunk = new TestAsyncThunk(fetchNextArticles, {
//             articles: {
//                 page: 2,
//                 ids: [],
//                 entities: {},
//                 limit: 5,
//                 isLoading: false,
//                 hasMore: false,
//                 _inited: false,
//             },
//         });

//         await thunk.callThunk();

//         expect(thunk.dispatch).toBeCalledTimes(2);
//         expect(fetchArticlesList).not.toHaveBeenCalled();
//     });
// });
