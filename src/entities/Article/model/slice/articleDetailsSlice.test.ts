import { fetchArticleById } from "../services/fetchArticleById";
import { Article, ArticleBlockType, ArticleType } from "../types/article";
import { ArticleDetailsSchema } from "../types/articleDetailsSchema";
import { articleDetailsReducer } from "./articleDetailsSlice";

const data: Article = {
    id: "1",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    views: 1022,
    createdAt: "26.02.2022",
    user: {
        id: "1",
        username: "Admin",
        avatar: "",
    },
    type: [ArticleType.IT],
    blocks: [
        {
            id: "1",
            type: ArticleBlockType.TEXT,
            title: "Заголовок этого блока",
            paragraphs: [
                "Программа, которую по традиции называют «Hello, world!», очень проста. ",
            ],
        },
    ],
};

describe("articleDetailsSlice", () => {
    test("test fetchArticleById service pending", () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.pending
            )
        ).toEqual({ isLoading: true });
    });

    test("test fetchArticleById service fulfilled", () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(data, "", "")
            )
        ).toEqual({
            data,
            isLoading: false,
        });
    });

    test("test fetchArticleById service rejected", () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.rejected
            )
        ).toEqual({
            isLoading: false,
        });
    });
});
