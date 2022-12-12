import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { classNames } from "@/shared/lib";
import { Page } from "@/widgets/Page";

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation("articles");
    const { id } = useParams<{ id: string }>();

    return (
        <Page className={classNames("", {}, [className])}>
            {t("Редактирование статьи")}
        </Page>
    );
};
export default memo(ArticleEditPage);
