import { FC, memo } from "react";
import { classNames } from "shared/lib";
import { Card, Skeleton } from "shared/ui";
import { ArticleView } from "../../model/consts/consts";
import cls from "./ArticleListItem.module.scss";

export interface ArticleListItemProps {
    view: ArticleView;
    className?: string;
}

export const ArticleListItemSkeleton: FC<ArticleListItemProps> = memo(
    (props) => {
        const { view, className } = props;

        if (view === ArticleView.LIST) {
            return (
                <div className={classNames("", {}, [className, cls[view]])}>
                    <Card className={cls.card}>
                        <div className={cls.header}>
                            <Skeleton
                                width={30}
                                height={30}
                                borderRadius="50%"
                                className={cls.avatar}
                            />
                            <Skeleton width={100} height={16} />
                            <Skeleton
                                width={50}
                                height={16}
                                className={cls.date}
                            />
                        </div>
                        <Skeleton
                            width={300}
                            height={24}
                            className={cls.title}
                        />
                        <Skeleton
                            width={200}
                            height={24}
                            className={cls.types}
                        />
                        <Skeleton
                            width="100%"
                            height={200}
                            className={cls.textBlock}
                        />

                        <div className={cls.footer}>
                            <Skeleton width={120} height={40} />
                            <Skeleton
                                width={70}
                                height={16}
                                className={cls.views}
                            />
                        </div>
                    </Card>
                </div>
            );
        }

        return (
            <div className={classNames("", {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.image}>
                        <Skeleton
                            width="100%"
                            height={250}
                            className={cls.img}
                        />
                    </div>
                    <div className={cls.info}>
                        <Skeleton
                            width={100}
                            height={16}
                            className={cls.types}
                        />
                    </div>
                    <Skeleton width={150} height={16} className={cls.title} />
                </Card>
            </div>
        );
    }
);
