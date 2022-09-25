import { FC } from "react";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib";
import { AppLink, AppLinkTheme } from "shared/ui";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/" theme={AppLinkTheme.INVERTED}>
                    {t("Главная")}
                </AppLink>
                <AppLink to={RoutePath.about} theme={AppLinkTheme.INVERTED}>
                    {t("О нас")}
                </AppLink>
            </div>
        </div>
    );
};
