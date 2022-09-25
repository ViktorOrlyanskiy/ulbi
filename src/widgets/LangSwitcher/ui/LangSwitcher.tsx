import { FC } from "react";
import { classNames } from "shared/lib";
import { Button } from "shared/ui";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button className={classNames("", {}, [className])} onClick={toggleLang}>
            {t("Язык")}
        </Button>
    );
};
