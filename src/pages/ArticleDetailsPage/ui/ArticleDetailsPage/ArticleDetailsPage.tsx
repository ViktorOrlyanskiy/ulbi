import { FC, memo } from "react";
import { useParams } from "react-router-dom";

import { Page } from "widgets/Page";
import { ArticleComments } from "widgets/ArticleComments";
import { FetchRecommendedArticles } from "features/FetchRecommendedArticles";
import { FetchArticleById } from "features/FetchArticleById";
import { classNames } from "shared/lib";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    return (
        <Page className={classNames("", {}, [className])}>
            <FetchArticleById id={id} className={cls.block} />
            <FetchRecommendedArticles className={cls.block} />
            <ArticleComments id={id} />
        </Page>
    );
};
export default memo(ArticleDetailsPage);
