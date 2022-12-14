import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { NotificationsList } from "@/entities/Notification";
import {
    Dropdown,
    Icon,
    Position,
    Text,
    TextAlign,
    TextTheme,
} from "@/shared/ui";
import BellIcon from "@/shared/assets/icons/bell.svg";
import { useFetchNotifications } from "../../api/notifications";
import cls from "./FetchNotifications.module.scss";

interface FetchNotificationsProps {}

export const FetchNotifications: FC<FetchNotificationsProps> = memo(() => {
    const { t } = useTranslation();

    const {
        data: notifications,
        isLoading,
        error,
    } = useFetchNotifications(null, {
        pollingInterval: 20000,
    });

    return (
        <Dropdown
            marginFromTrigger={20}
            maxHeightPopup={300}
            position={Position.BOTTOM_RIGHT}
            className={cls.popup}
            trigger={<Icon Svg={BellIcon} size={20} />}
        >
            {error ? (
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    text={t("Произошла ошибка при загрузки уведомлений")}
                />
            ) : (
                <NotificationsList
                    notifications={notifications}
                    isLoading={isLoading}
                />
            )}
        </Dropdown>
    );
});
