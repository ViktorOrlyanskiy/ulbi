import { FC, memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib";
import { LangSwitcher } from "@/widgets/LangSwitcher";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { HStack, BurgerButton } from "@/shared/ui";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);

    return (
        <section
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <BurgerButton
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
            />
            <div className={cls.items}>
                {sidebarItemsList.map((item) => (
                    <SidebarItem
                        item={item}
                        key={item.path}
                        collapsed={collapsed}
                    />
                ))}
            </div>
            <HStack max justify="center" gap="12" className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </HStack>
        </section>
    );
});
