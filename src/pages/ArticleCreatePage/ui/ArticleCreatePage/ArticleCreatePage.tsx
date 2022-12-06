import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";
import { Page } from "widgets/Page";

interface ArticleCreatePageProps {
    className?: string;
}

const ArticleCreatePage: FC<ArticleCreatePageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation("articles");

    return (
        <Page className={classNames("", {}, [className])}>
            {t("Создание новой статьи")}
        </Page>
    );
};
export default memo(ArticleCreatePage);
