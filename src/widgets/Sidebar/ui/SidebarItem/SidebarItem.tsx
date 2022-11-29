import { getUserAuthData } from "entities/User";
import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib";
import { AppLink, HStack } from "shared/ui";
import { SidebarItemType } from "../../model/types/item";
import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ item, collapsed }) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            to={item.path}
            className={classNames(cls.SidebarItem, {
                [cls.collapsed]: collapsed,
            })}
        >
            <HStack justify="center" className={cls.iconBox}>
                <item.Icon className={cls.icon} />
            </HStack>
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
