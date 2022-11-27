import { FC, memo } from "react";
import CalendarIcon from "shared/assets/icons/articles/calendar.svg";
import EyeIcon from "shared/assets/icons/articles/eye.svg";
import { classNames } from "shared/lib";
import { Avatar, Icon, Skeleton, Text, TextSize } from "shared/ui";
import {
    Article,
    ArticleBlock,
    ArticleBlockType,
} from "../../model/types/article";
import { ArticleBlockCode } from "../ArticleBlockCode/ArticleBlockCode";
import { ArticleBlockImage } from "../ArticleBlockImage/ArticleBlockImage";
import { ArticleBlockText } from "../ArticleBlockText/ArticleBlockText";
import cls from "./ArticleDetails.module.scss";

interface ArticleDetailsProps {
    isLoading: boolean;
    article?: Article;
    className?: string;
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
    const { article, isLoading, className } = props;

    const renderBlock = (block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleBlockCode
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                );

            case ArticleBlockType.IMAGE:
                return (
                    <ArticleBlockImage
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                );

            case ArticleBlockType.TEXT:
                return (
                    <ArticleBlockText
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                );

            default:
                return null;
        }
    };

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    borderRadius="50%"
                />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.subtitle} width={500} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            <div className={cls.avatarWrapper}>
                <Avatar
                    size={200}
                    src={article?.img}
                    alt={article?.title}
                    className={cls.avatar}
                />
            </div>
            <Text
                title={article?.title}
                text={article?.subtitle}
                size={TextSize.L}
                className={cls.title}
            />
            <div className={cls.articleInfo}>
                <Icon Svg={EyeIcon} size={15} />
                <Text text={String(article?.views)} />
            </div>
            <div className={cls.articleInfo}>
                <Icon Svg={CalendarIcon} size={15} />
                <Text text={article?.createdAt} />
            </div>
            {article?.blocks.map(renderBlock)}
        </div>
    );
});
