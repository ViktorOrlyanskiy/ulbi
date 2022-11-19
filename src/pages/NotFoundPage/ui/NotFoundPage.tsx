import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "shared/ui";
import cls from "./NotFoundPage.module.scss";

const NotFoundPage: FC = memo(() => {
    const { t } = useTranslation();
    return <Page className={cls.NotFoundPage}>{t("Страница не найдена")}</Page>;
});
export default NotFoundPage;
