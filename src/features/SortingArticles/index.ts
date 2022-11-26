export { SortingArticles } from "./ui/SortingArticles/SortingArticles";
export {
    sortingArticlesReducer,
    sortingArticlesActions,
} from "./model/slice/sortingArticlesSlice";

export { SortingArticlesSchema } from "./model/types/sortingArticlesSchema";
export {
    getSort,
    getOrder,
    getView,
    getSearch,
    getType,
    getInited,
} from "./model/selectors/sortingArticles";
