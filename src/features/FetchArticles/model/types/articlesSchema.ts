import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/Article";

export interface ArticlesSchema extends EntityState<Article> {
    page: number;
    hasMore: boolean;
    view?: ArticleView;
    limit?: number;
    isLoading?: boolean;
    error?: string;
    _inited: boolean;
}
