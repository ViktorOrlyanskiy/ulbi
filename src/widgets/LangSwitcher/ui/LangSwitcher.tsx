import { FC } from "react";
import { classNames } from "shared/lib";
import { Button, ButtonSize, ButtonTheme } from "shared/ui";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button
            className={classNames("", {}, [className])}
            onClick={toggleLang}
            theme={ButtonTheme.OUTLINE_INVERTED}
            size={ButtonSize.M}
            square={short}
        >
            {t(short ? "Короткий язык" : "Язык")}
        </Button>
    );
};
