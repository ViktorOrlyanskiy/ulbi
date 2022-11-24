import { FC, memo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import {
    ArticleList,
    ArticleSort,
    ArticleType,
    ArticleView,
} from "entities/Article";
import {
    ReducersList,
    useAppDispatch,
    useDebounce,
    useDynamicModuleLoader,
    useInitialEffect,
} from "shared/hooks";
import { classNames } from "shared/lib";
import { SortOrder } from "shared/types";
import {
    getArticlesError,
    getArticlesIsLoading,
} from "../../model/selectors/getArticles";
import { fetchArticlesList } from "../../model/services/fetchArticlesList";
import {
    articlesActions,
    articlesReducer,
    getArticles,
} from "../../model/slice/articlesSlice";
import cls from "./FetchArticles.module.scss";

interface FetchArticlesProps {
    sort: ArticleSort;
    order: SortOrder;
    view: ArticleView;
    search: string;
    type: ArticleType;
    className?: string;
}

const reducers: ReducersList = {
    articles: articlesReducer,
};

export const FetchArticles: FC<FetchArticlesProps> = memo((props) => {
    useDynamicModuleLoader(reducers, false);
    const { sort, order, view, search, type, className } = props;
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const error = useSelector(getArticlesError);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const fetchDataWithDelay = useDebounce(fetchData, 500);

    // запрос на сервер: мгновенный
    useInitialEffect(() => {
        dispatch(
            articlesActions.initSortFields({ sort, order, view, search, type })
        );
        dispatch(fetchArticlesList({ replace: false }));
    });

    // обновление стейта
    useEffect(() => {
        dispatch(
            articlesActions.initSortFields({ sort, order, view, search, type })
        );
    }, [dispatch, sort, order, view, search, type]);

    // запрос на сервер: мгновенный
    useEffect(() => {
        fetchData();
    }, [fetchData, sort, order, type]);

    // запрос на сервер: с задержкой
    useEffect(() => {
        fetchDataWithDelay();
    }, [fetchDataWithDelay, search]);

    return (
        <div className={classNames(cls.FetchArticles, {}, [className])}>
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                view={view}
            />
        </div>
    );
});
