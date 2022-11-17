import { FC, memo } from "react";
import { classNames } from "shared/lib";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import cls from "./ArticleList.module.scss";

interface ArticleListProps {
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    className?: string;
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
    const { articles, isLoading, view = ArticleView.GRID, className } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
            className={cls.card}
        />
    );

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                {getSkeletons(view)}
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles.length && articles.map(renderArticle)}
        </div>
    );
});
