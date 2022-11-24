import { ArticleSort, ArticleView, ArticleType } from "entities/Article";
import { SortOrder } from "shared/types";

export interface SortingArticlesSchema {
    sort: ArticleSort;
    order: SortOrder;
    view: ArticleView;
    search: string;
    type: ArticleType;
}
