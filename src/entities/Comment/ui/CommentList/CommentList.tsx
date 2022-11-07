import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";
import { Text, TextAlign } from "shared/ui";
import { Comment } from "../../model/types/comment";
import { CommentCard } from "../CommentCard/CommentCard";
import cls from "./CommentList.module.scss";

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    error?: string;
    isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = memo((props) => {
    const { comments, error, isLoading, className } = props;
    const { t } = useTranslation("articles");

    if (error) {
        return (
            <div className={classNames("", {}, [className])}>
                <Text
                    align={TextAlign.CENTER}
                    text={t("Ни один пользователь еще не оставил комментарий")}
                />
            </div>
        );
    }

    return (
        <div className={classNames("", {}, [className])}>
            {comments?.length &&
                comments.map((comment) => (
                    <CommentCard
                        comment={comment}
                        isLoading={isLoading}
                        className={cls.comment}
                    />
                ))}
        </div>
    );
});
