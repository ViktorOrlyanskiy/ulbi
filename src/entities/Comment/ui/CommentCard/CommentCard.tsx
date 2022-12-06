import { FC, memo } from "react";
import { classNames } from "shared/lib";
import { Comment } from "entities/Comment";
import { RoutePath } from "shared/const";
import { AppLink, Avatar, HStack, Skeleton, Text, TextWeight } from "shared/ui";
import cls from "./CommentCard.module.scss";

interface CommentCardProps {
    comment?: Comment;
    isLoading?: boolean;
    className?: string;
}

export const CommentCard: FC<CommentCardProps> = memo((props) => {
    const { comment, isLoading, className } = props;

    if (!comment) {
        return null;
    }

    if (isLoading) {
        return (
            <div
                className={classNames(cls.CommentList, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <HStack gap="12" className={cls.header}>
                    <Skeleton width={40} height={40} borderRadius="50%" />
                    <Skeleton width={100} height={16} />
                </HStack>
                <Skeleton width="100%" height={50} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink
                to={`${RoutePath.profile}${comment?.user.id}`}
                className={cls.header}
            >
                <Avatar src={comment?.user.avatar} size={40} />
                <Text title={comment?.user.username} weight={TextWeight.BOLD} />
            </AppLink>
            <Text text={comment?.text} />
        </div>
    );
});
