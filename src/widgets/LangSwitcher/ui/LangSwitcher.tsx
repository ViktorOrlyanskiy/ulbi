import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";
import { Button, ButtonSize, ButtonTheme } from "shared/ui";

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(
    ({ className, short }) => {
        const { t, i18n } = useTranslation();

        const toggleLang = () => {
            i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
        };

        return (
            <Button
                className={classNames("", {}, [className])}
                onClick={toggleLang}
                theme={ButtonTheme.OUTLINE}
                size={ButtonSize.M}
                square={short}
            >
                {t(short ? "Короткий язык" : "Язык")}
            </Button>
        );
    }
);
