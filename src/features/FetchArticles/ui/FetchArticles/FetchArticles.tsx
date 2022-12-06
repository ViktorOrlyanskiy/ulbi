import { FC, memo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
    ArticleList,
    ArticleSort,
    ArticleType,
    ArticleView,
} from "entities/Article";
import {
    ReducersList,
    useAppDispatch,
    useComponentDidMount,
    useDebounce,
    useDynamicModuleLoader,
    useInitialEffect,
} from "shared/hooks";
import { classNames } from "shared/lib";
import { Text, TextAlign, TextTheme } from "shared/ui";
import { SortOrder } from "shared/types";
import {
    getArticlesError,
    getArticlesInited,
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
    const { t } = useTranslation("articles");
    const isComponentDidMount = useComponentDidMount();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const error = useSelector(getArticlesError);
    const initedArticles = useSelector(getArticlesInited);

    const fetchData = useCallback(() => {
        dispatch(
            fetchArticlesList({
                sort,
                order,
                search,
                type,
                replace: true,
            })
        );
    }, [dispatch, sort, order, search, type]);

    const fetchDataWithDelay = useDebounce(fetchData, 500);

    useInitialEffect(() => {
        if (!initedArticles) {
            dispatch(articlesActions.initState(view));
            fetchData();
        }
    });

    // запрос на сервер: с задержкой 500мс
    useEffect(() => {
        if (isComponentDidMount) {
            fetchDataWithDelay();
        }

        // eslint-disable-next-line
    }, [fetchData]);

    if (error) {
        return (
            <div className={classNames(cls.FetchArticles, {}, [className])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    text={t("Произошла ошибка при загрузки страницы")}
                />
            </div>
        );
    }

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
