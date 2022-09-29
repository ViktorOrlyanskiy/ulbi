import { FC } from "react";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/const";
import { classNames } from "shared/lib";
import { AppLink } from "shared/ui";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={RoutePath.main}>{t("Главная")}</AppLink>
                <AppLink to={RoutePath.about}>{t("О нас")}</AppLink>
            </div>
        </div>
    );
};
