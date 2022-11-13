import { FC, lazy } from "react";
import { ArticleCommentsProps } from "./ArticleComments";

export const ArticleCommentsAsync = lazy<FC<ArticleCommentsProps>>(
    () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(import("./ArticleComments")), 500);
        })
);
