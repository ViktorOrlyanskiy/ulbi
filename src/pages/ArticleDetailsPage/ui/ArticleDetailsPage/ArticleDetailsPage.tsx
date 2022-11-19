import { ArticleDetails } from "entities/Article";
import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { ArticleComments } from "widgets/ArticleComments";
import { classNames } from "shared/lib";
import { Page } from "shared/ui";
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
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                {t("Статья не найдена")}
            </Page>
        );
    }

    return (
        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
            <ArticleComments id={id} />
        </Page>
    );
};
export default memo(ArticleDetailsPage);
