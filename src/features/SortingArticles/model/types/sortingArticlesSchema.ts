import { ArticleSort, ArticleView, ArticleType } from "entities/Article";
import { SortOrder } from "shared/types";

export interface FiltersFromUrl {
    sort: ArticleSort | null;
    order: SortOrder | null;
    search: string | null;
    type: ArticleType | null;
}

export interface SortingArticlesSchema {
    sort: ArticleSort;
    order: SortOrder;
    search: string;
    type: ArticleType;
    view: ArticleView;
    _inited: boolean;
}
