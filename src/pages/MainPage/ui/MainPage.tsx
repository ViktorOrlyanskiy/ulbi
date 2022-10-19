import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { BugButton } from "app/providers/ErrorBoundary";

const MainPage: FC = memo(() => {
    const { t } = useTranslation("main");

    return (
        <div>
            {t("Главная")}
            <BugButton />
        </div>
    );
});
export default MainPage;
