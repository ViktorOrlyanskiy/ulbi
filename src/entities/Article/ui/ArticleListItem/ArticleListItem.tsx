import { FC, HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import EyeIcon from "@/shared/assets/icons/articles/eye.svg";
import { RoutePath } from "@/shared/const";
import { classNames } from "@/shared/lib";
import {
    AppLink,
    Avatar,
    Button,
    ButtonTheme,
    Card,
    Icon,
    Text,
} from "@/shared/ui";
import { ArticleView, ArticleBlockType } from "../../model/consts/consts";
import { Article, ArticleTextBlock } from "../../model/types/article";
import { ArticleBlockText } from "../ArticleBlockText/ArticleBlockText";
import cls from "./ArticleListItem.module.scss";

export interface ArticleListItemProps {
    article: Article;
    view: ArticleView;
    className?: string;
    target?: HTMLAttributeAnchorTarget | undefined;
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props) => {
    const { article, view, target, className } = props;
    const { t } = useTranslation("articles");

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock;

        return (
            <div className={classNames("", {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar
                            size={30}
                            src={article.user.avatar || undefined}
                            className={cls.avatar}
                        />
                        <Text text={article.user.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    <Text text={article.type.join(" ")} className={cls.types} />
                    <img
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />
                    {textBlock && (
                        <ArticleBlockText
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={RoutePath.article_details + article.id}
                        >
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t("Читать далее")}
                            </Button>
                        </AppLink>

                        <Text
                            text={String(article.views)}
                            className={cls.views}
                        />
                        <Icon Svg={EyeIcon} size={15} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.article_details + article.id}
            className={classNames("", {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <div className={cls.image}>
                    <img
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.info}>
                    <Text text={article.type.join(" ")} className={cls.types} />
                    <Text text={String(article.views)} className={cls.views} />
                    <Icon Svg={EyeIcon} size={15} />
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
