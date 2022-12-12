import { FC, memo, Suspense, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { AddNewComment } from "@/features/AddNewComment";
import { CommentList } from "@/entities/Comment";
import {
    ReducersList,
    useAppDispatch,
    useDynamicModuleLoader,
    useInitialEffect,
} from "@/shared/hooks";
import { classNames } from "@/shared/lib";
import { Loader, Text, TextSize } from "@/shared/ui";
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from "../../model/selectors/articleComments";
import {
    articleCommentsReducer,
    getArticleComments,
} from "../../model/slice/articleComments";
import { addCommentForArticle } from "../../model/services/addCommentForArticle";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId";
import cls from "./ArticleComments.module.scss";

export interface ArticleCommentsProps {
    id?: string;
    className?: string;
}

const reducers: ReducersList = {
    articleComments: articleCommentsReducer,
};

const ArticleComments: FC<ArticleCommentsProps> = memo((props) => {
    useDynamicModuleLoader(reducers);
    const { id, className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleCommentsError);

    const onSendComment = useCallback(
        (value: string) => {
            dispatch(addCommentForArticle(value));
            dispatch(fetchCommentsByArticleId(id));
        },
        [dispatch, id]
    );

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchCommentsByArticleId(id));
        }
    });
    return (
        <Suspense fallback={<Loader />}>
            <div className={classNames("", {}, [className])}>
                <Text
                    title={t("Комментарии")}
                    size={TextSize.M}
                    className={cls.title}
                />
                <AddNewComment
                    className={cls.block}
                    onSendComment={onSendComment}
                />

                <CommentList
                    comments={comments}
                    isLoading={isLoading}
                    error={error}
                />
            </div>
        </Suspense>
    );
});
export default ArticleComments;
