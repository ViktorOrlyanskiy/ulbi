import { FC, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { ArticleList, ArticleView } from "entities/Article";
import {
    ReducersList,
    useAppDispatch,
    useDynamicModuleLoader,
    useInitialEffect,
} from "shared/hooks";
import { classNames } from "shared/lib";
import {
    getArticlesError,
    getArticlesIsLoading,
    getArticlesView,
} from "../../model/selectors/getArticles";
import { fetchArticlesList } from "../../model/services/fetchArticlesList";
import {
    articlesActions,
    articlesReducer,
    getArticles,
} from "../../model/slice/articlesSlice";
import cls from "./FetchArticles.module.scss";
import { ArticlesViewSwitcher } from "../ArticlesViewSwitcher/ArticlesViewSwitcher";

interface FetchArticlesProps {
    className?: string;
}

const reducers: ReducersList = {
    articles: articlesReducer,
};

export const FetchArticles: FC<FetchArticlesProps> = memo((props) => {
    useDynamicModuleLoader(reducers);
    const { className } = props;

    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesView);
    const isLoading = useSelector(getArticlesIsLoading);
    const error = useSelector(getArticlesError);

    const dispatch = useAppDispatch();
    useInitialEffect(() => {
        dispatch(articlesActions.initView());
        dispatch(fetchArticlesList({ page: 1 }));
    });

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesActions.setView(view));
        },
        [dispatch]
    );

    return (
        <div className={classNames(cls.FetchArticles, {}, [className])}>
            <ArticlesViewSwitcher view={view} onViewClick={onChangeView} />
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                view={view}
            />
        </div>
    );
});
