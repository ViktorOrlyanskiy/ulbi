import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import EyeIcon from "shared/assets/icons/articles/eye.svg";
import { RoutePath } from "shared/const";
import { classNames } from "shared/lib";
import { Avatar, Button, ButtonTheme, Card, Icon, Text } from "shared/ui";
import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from "../../model/types/article";
import { ArticleBlockText } from "../ArticleBlockText/ArticleBlockText";
import cls from "./ArticleListItem.module.scss";

export interface ArticleListItemProps {
    article: Article;
    view: ArticleView;
    className?: string;
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props) => {
    const { article, view, className } = props;
    const { t } = useTranslation("articles");
    const navigate = useNavigate();

    const onClickArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [navigate, article]);

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
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onClickArticle}
                        >
                            {t("Читать далее")}
                        </Button>
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
        <div className={classNames("", {}, [className, cls[view]])}>
            <Card className={cls.card} onClick={onClickArticle}>
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
        </div>
    );
});
