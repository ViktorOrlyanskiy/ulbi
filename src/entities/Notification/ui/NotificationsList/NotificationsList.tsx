import { Notification } from "entities/Notification";
import { FC, memo } from "react";
import { classNames } from "shared/lib";
import { Skeleton, VStack } from "shared/ui";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import cls from "./NotificationsList.module.scss";

interface NotificationsListProps {
    notifications?: Notification[];
    isLoading?: boolean;
    className?: string;
}

export const NotificationsList: FC<NotificationsListProps> = memo((props) => {
    const { notifications, isLoading, className } = props;

    if (isLoading) {
        return (
            <VStack
                max
                gap="16"
                className={classNames(cls.NotificationsList, {}, [className])}
            >
                <Skeleton width="100%" height={50} borderRadius="4px" />
                <Skeleton width="100%" height={50} borderRadius="4px" />
                <Skeleton width="100%" height={50} borderRadius="4px" />
            </VStack>
        );
    }

    return (
        <VStack
            max
            gap="16"
            className={classNames(cls.NotificationsList, {}, [className])}
        >
            {notifications &&
                notifications.map((notification) => (
                    <NotificationItem
                        key={notification.id}
                        notification={notification}
                    />
                ))}
        </VStack>
    );
});
