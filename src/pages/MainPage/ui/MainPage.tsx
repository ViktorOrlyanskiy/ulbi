import { FC } from "react";
import { useTranslation } from "react-i18next";
import { BugButton } from "app/providers/ErrorBoundary";

const MainPage: FC = () => {
    const { t } = useTranslation("main");

    return (
        <div>
            {t("Главная")}
            {t("inc")}
            <BugButton />
        </div>
    );
};
export default MainPage;
