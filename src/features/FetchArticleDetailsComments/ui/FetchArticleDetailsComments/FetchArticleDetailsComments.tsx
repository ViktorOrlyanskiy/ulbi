import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { CommentList } from "entities/Comment";
import {
    ReducersList,
    useAppDispatch,
    useDynamicModuleLoader,
    useInitialEffect,
} from "shared/hooks";
import { classNames } from "shared/lib";
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from "../../model/slice/articleDetailsComments";
import {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading,
} from "../../model/selectors/articleDetailsComments";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId";

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
        const dispatch = useAppDispatch();
        const comments = useSelector(getArticleComments.selectAll);
        const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
        const error = useSelector(getArticleDetailsCommentsError);

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id));
        });

        return (
            <div className={classNames("", {}, [className])}>
                <CommentList
                    comments={comments}
                    isLoading={isLoading}
                    error={error}
                />
            </div>
        );
    });
