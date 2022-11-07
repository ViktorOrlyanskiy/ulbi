import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { CommentList } from "entities/Comment";
import {
    ReducersList,
    useAppDispatch,
    useDynamicModuleLoader,
    useInitialEffect,
} from "shared/hooks";
import { classNames } from "shared/lib";
import { Text, TextSize } from "shared/ui";
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from "../../model/slice/articleDetailsComments";
import {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading,
} from "../../model/selectors/articleDetailsComments";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId";
import cls from "./FetchArticleDetailsComments.module.scss";

interface FetchArticleDetailsCommentsProps {
    id: string;
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

export const FetchArticleDetailsComments: FC<FetchArticleDetailsCommentsProps> =
    memo((props) => {
        useDynamicModuleLoader(reducers);
        const { id, className } = props;
        const { t } = useTranslation("article");
        const dispatch = useAppDispatch();
        const comments = useSelector(getArticleComments.selectAll);
        const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
        const error = useSelector(getArticleDetailsCommentsError);

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id));
        });

        return (
            <div className={classNames("", {}, [className])}>
                <Text
                    title={t("Комментарии")}
                    size={TextSize.M}
                    className={cls.title}
                />
                <CommentList
                    comments={comments}
                    isLoading={isLoading}
                    error={error}
                />
            </div>
        );
    });
