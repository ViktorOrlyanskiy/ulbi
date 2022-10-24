import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";
import { AppLink } from "shared/ui";
import { SidebarItemType } from "../../model/items";
import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ item, collapsed }) => {
    const { t } = useTranslation();

    return (
        <AppLink
            to={item.path}
            className={classNames(cls.SidebarItem, {
                [cls.collapsed]: collapsed,
            })}
        >
            <div className={cls.iconBox}>
                <item.Icon className={cls.icon} />
            </div>
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
