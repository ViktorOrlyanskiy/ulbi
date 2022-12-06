import { FC, lazy } from "react";
import { ArticleCommentsProps } from "./ArticleComments";

export const ArticleCommentsAsync = lazy<FC<ArticleCommentsProps>>(
    () => import("./ArticleComments")
);
