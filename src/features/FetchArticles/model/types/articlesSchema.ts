import { EntityState } from "@reduxjs/toolkit";
import {
    Article,
    ArticleSort,
    ArticleType,
    ArticleView,
} from "entities/Article";
import { SortOrder } from "shared/types";

export interface SortFields {}

export interface ArticlesSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    _inited: boolean;

    // pagination
    page: number;
    hasMore: boolean;
    limit: number;

    // filters
    sort: ArticleSort;
    order: SortOrder;
    view: ArticleView;
    search: string;
    type: ArticleType;
}
