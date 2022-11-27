import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { ArticleList } from "entities/Article";
import {
    ReducersList,
    useAppDispatch,
    useDynamicModuleLoader,
    useInitialEffect,
} from "shared/hooks";
import { classNames } from "shared/lib";
import { Text } from "shared/ui";
import {
    getRecommendedArticles,
    recommendedArticlesReducer,
} from "../../model/slice/recommendedArticlesSlice";
import { fetchRecommendedArticles } from "../../model/services/fetchRecommendedArticles";
import {
    getRecommendedArticlesError,
    getRecommendedArticlesIsLoading,
} from "../../model/selectors/recommendedArticles";
import cls from "./FetchRecommendedArticles.module.scss";

interface FetchRecommendedArticlesProps {
    className?: string;
}

const reducers: ReducersList = {
    recommendedArticles: recommendedArticlesReducer,
};

export const FetchRecommendedArticles: FC<FetchRecommendedArticlesProps> = memo(
    (props) => {
        useDynamicModuleLoader(reducers);
        const { className } = props;
        const { t } = useTranslation("articles");
        const dispatch = useAppDispatch();

        const articles = useSelector(getRecommendedArticles.selectAll);
        const isLoading = useSelector(getRecommendedArticlesIsLoading);
        const error = useSelector(getRecommendedArticlesError);

        useInitialEffect(() => {
            dispatch(fetchRecommendedArticles());
        });

        return (
            <div
                className={classNames(cls.FetchRecommendedArticles, {}, [
                    className,
                ])}
            >
                <Text title={t("Рекомендованные статьи")} />
                <ArticleList
                    articles={articles}
                    isLoading={isLoading}
                    target="_blank"
                    className={cls.articles}
                />
            </div>
        );
    }
);
