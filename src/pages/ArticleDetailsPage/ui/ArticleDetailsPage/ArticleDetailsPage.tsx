import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { AddNewComment } from "features/AddNewComment";
import { FetchArticleDetailsComments } from "features/FetchArticleDetailsComments";
import { ArticleDetails } from "entities/Article";
import { useAppDispatch } from "shared/hooks";
import { classNames } from "shared/lib";
import { Text, TextSize } from "shared/ui";
import { fetchCommentsByArticleId } from "features/FetchArticleDetailsComments/model/services/fetchCommentsByArticleId";
import { addCommentForArticle } from "../../model/services/addCommentForArticle";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation("articles");
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();

    const onSendComment = useCallback(
        (value: string) => {
            dispatch(addCommentForArticle(value));
            dispatch(fetchCommentsByArticleId(id));
        },
        [dispatch, id]
    );

    if (!id) {
        return (
            <div
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                {t("Статья не найдена")}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
            <Text
                title={t("Комментарии")}
                size={TextSize.M}
                className={cls.title}
            />
            <AddNewComment
                className={cls.block}
                onSendComment={onSendComment}
            />
            <FetchArticleDetailsComments id={id} />
        </div>
    );
};
export default memo(ArticleDetailsPage);
