import { FC, HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";
import { Text } from "shared/ui";
import { ArticleView } from "../../model/consts/consts";
import { Article } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import cls from "./ArticleList.module.scss";

interface ArticleListProps {
    articles?: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    className?: string;
    target?: HTMLAttributeAnchorTarget | undefined;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.LIST ? 3 : 9)
        .fill(0)
        .map((_, index) => (
            <ArticleListItemSkeleton
                key={index}
                view={view}
                className={cls.card}
            />
        ));

export const ArticleList: FC<ArticleListProps> = memo((props) => {
    const {
        articles,
        isLoading,
        view = ArticleView.GRID,
        target,
        className,
    } = props;
    const { t } = useTranslation("articles");

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
            className={cls.card}
            target={target}
        />
    );

    if (!isLoading && !articles?.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className])}>
                <Text title={t("Статьи не найдены")} />
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles && !!articles.length && articles.map(renderArticle)}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
