import { FC, memo, ReactNode, useCallback } from "react";
import { classNames } from "shared/lib";
import { Card } from "..";
import { CardSize, CardTheme } from "../Card/Card";
import cls from "./Tabs.module.scss";

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
    className?: string;
}

export const Tabs: FC<TabsProps> = memo((props) => {
    const { tabs, value, onTabClick, className } = props;

    const onClick = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick]
    );

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    onClick={onClick(tab)}
                    key={tab.value}
                    theme={
                        tab.value === value
                            ? CardTheme.PRIMARY
                            : CardTheme.OUTLINE
                    }
                    size={CardSize.S}
                    className={cls.tab}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
