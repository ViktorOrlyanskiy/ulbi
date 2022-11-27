import { ArticleDetails } from "entities/Article";
import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Page } from "widgets/Page";
import { ArticleComments } from "widgets/ArticleComments";
import { FetchRecommendedArticles } from "features/FetchRecommendedArticles";
import { classNames } from "shared/lib";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation("articles");
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <Page className={classNames("", {}, [className])}>
                {t("Статья не найдена")}
            </Page>
        );
    }

    return (
        <Page className={classNames("", {}, [className])}>
            <ArticleDetails id={id} className={cls.block} />
            <FetchRecommendedArticles className={cls.block} />
            <ArticleComments id={id} />
        </Page>
    );
};
export default memo(ArticleDetailsPage);
