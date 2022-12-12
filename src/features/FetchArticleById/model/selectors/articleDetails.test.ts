import { StateSchema } from "@/app/providers/StoreProvider";
import { ArticleBlockType, ArticleType } from "@/entities/Article";
import {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticleDetailsError,
} from "./articleDetails";

describe("getArticleDetailsData", () => {
    test("should return data", () => {
        const data = {
            id: "1",
            title: "Javascript news",
            subtitle: "Что нового в JS за 2022 год?",
            img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
            views: 1022,
            createdAt: "26.02.2022",
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

        const state: DeepPartial<StateSchema> = {
            articleDetails: { data },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toBe(undefined);
    });
});

describe("getArticleDetailsIsLoading", () => {
    test("should return isLoading", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: { isLoading: true },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(false);
    });
});

describe("getArticleDetailsError", () => {
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: { error: "error" },
        };
        expect(getArticleDetailsError(state as StateSchema)).toBe("error");
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsError(state as StateSchema)).toBe(undefined);
    });
});
