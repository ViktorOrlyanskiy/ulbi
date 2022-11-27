import { lazy } from "react";

export const ArticleCreatePageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-expect-error
            setTimeout(() => resolve(import("./ArticleCreatePage")), 1000);
        })
);
