import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";
import cls from "./NotFoundPage.module.scss";

const NotFoundPage: FC = memo(() => {
    const { t } = useTranslation();
    return (
        <Page data-testid="NotFoundPage" className={cls.NotFoundPage}>
            {t("Страница не найдена")}
        </Page>
    );
});
export default NotFoundPage;
