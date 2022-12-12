import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleList } from "@/entities/Article";
import { useInitialEffect } from "@/shared/hooks";
import { classNames } from "@/shared/lib";
import { Text } from "@/shared/ui";
import { useFetchRecomandedArticles } from "../../api/recommendedArticlesApi";
import cls from "./FetchRecommendedArticles.module.scss";

interface FetchRecommendedArticlesProps {
    className?: string;
}

export const FetchRecommendedArticles: FC<FetchRecommendedArticlesProps> = memo(
    (props) => {
        const { className } = props;
        const { t } = useTranslation("articles");
        const {
            isLoading,
            data: articles,
            error,
        } = useFetchRecomandedArticles(4);

        useInitialEffect(() => {});

        if (error) {
            return null;
        }

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
