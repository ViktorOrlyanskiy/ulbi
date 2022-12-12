import { FC, memo, useCallback } from "react";
import { classNames } from "@/shared/lib";
import ListIcon from "@/shared/assets/icons/list.svg";
import GridIcon from "@/shared/assets/icons/grid.svg";
import { ArticleView } from "@/entities/Article";
import { Button, ButtonTheme, Icon } from "@/shared/ui";
import cls from "./ArticlesViewSwitcher.module.scss";

interface ArticlesViewSwitcherProps {
    view?: ArticleView;
    onViewClick?: (view: ArticleView) => void;
    className?: string;
}

const viewTypes = [
    { view: ArticleView.LIST, icon: ListIcon },
    { view: ArticleView.GRID, icon: GridIcon },
];

export const ArticlesViewSwitcher: FC<ArticlesViewSwitcherProps> = memo(
    (props) => {
        const { view, onViewClick, className } = props;

        const onClick = useCallback(
            (newView: ArticleView) => () => {
                onViewClick?.(newView);
            },
            [onViewClick]
        );

        return (
            <div
                className={classNames(cls.ArticlesViewSwitcher, {}, [
                    className,
                ])}
            >
                {viewTypes.map((viewType) => (
                    <Button
                        theme={ButtonTheme.ICON}
                        key={viewType.view}
                        onClick={onClick(viewType.view)}
                    >
                        <Icon
                            Svg={viewType.icon}
                            size={18}
                            className={classNames(
                                "",
                                { [cls.notSelected]: viewType.view !== view },
                                []
                            )}
                        />
                    </Button>
                ))}
            </div>
        );
    }
);
