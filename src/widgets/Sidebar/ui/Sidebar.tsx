import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/const";
import { classNames } from "shared/lib";
import { AppLink, Button } from "shared/ui";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import MainIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={cls.items}>
                <AppLink to={RoutePath.main} className={cls.item}>
                    <div className={cls.iconBox}>
                        <MainIcon className={cls.icon} />
                    </div>
                    <span className={cls.link}>{t("Главная")}</span>
                </AppLink>

                <AppLink to={RoutePath.about} className={cls.item}>
                    <div className={cls.iconBox}>
                        <AboutIcon className={cls.icon} />
                    </div>
                    <span className={cls.link}> {t("О нас")}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.langSwitcher} />
            </div>
        </div>
    );
};
