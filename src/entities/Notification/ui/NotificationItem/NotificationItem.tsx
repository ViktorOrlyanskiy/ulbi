import { FC, memo } from "react";
import { Notification } from "@/entities/Notification";
import { classNames } from "@/shared/lib";
import { Text, TextSize } from "@/shared/ui";
import cls from "./NotificationItem.module.scss";

interface NotificationItemProps {
    notification: Notification;
    className?: string;
}

export const NotificationItem: FC<NotificationItemProps> = memo((props) => {
    const { notification, className } = props;

    return (
        <div className={classNames(cls.NotificationItem, {}, [className])}>
            {notification.href ? (
                <a href={notification.href} target="_blank" rel="noreferrer">
                    <Text
                        size={TextSize.S}
                        title={notification.title}
                        text={notification.description}
                        className={cls.link}
                    />
                </a>
            ) : (
                <Text
                    size={TextSize.S}
                    title={notification.title}
                    text={notification.description}
                />
            )}
        </div>
    );
});
