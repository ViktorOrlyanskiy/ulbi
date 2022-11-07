import { FC, memo } from "react";
import { classNames } from "shared/lib";
import { Comment } from "entities/Comment";
import { Avatar, Skeleton, Text, TextWeight } from "shared/ui";
import cls from "./CommentCard.module.scss";

interface CommentCardProps {
    comment?: Comment;
    isLoading?: boolean;
    className?: string;
}

export const CommentCard: FC<CommentCardProps> = memo((props) => {
    const { comment, isLoading, className } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} borderRadius="50%" />
                    <Skeleton width={100} height={16} />
                </div>
                <Skeleton width="100%" height={50} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                <Avatar src={comment?.user.avatar} size={30} />
                <Text title={comment?.user.username} weight={TextWeight.BOLD} />
            </div>
            <Text text={comment?.text} />
        </div>
    );
});