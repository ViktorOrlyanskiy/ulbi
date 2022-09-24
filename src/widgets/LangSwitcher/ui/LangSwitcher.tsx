import { FC } from "react";
import { classNames } from "shared/lib";
import cls from "./LangSwitcher.module.scss";
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
        <Button className={classNames(cls.LangSwitcher, {}, [className])} onClick={toggleLang}>
            {t("Язык")}
        </Button>
    );
};
