import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { FetchArticles } from "features/FetchArticles";
import { classNames } from "shared/lib";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation("articles");

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <FetchArticles />
        </div>
    );
};
export default memo(ArticlesPage);
