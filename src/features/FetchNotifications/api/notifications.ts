import { Notification } from "@/entities/Notification";
import { $rtkApi } from "@/shared/api/rtkApi";

const notifications = $rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchNotifications: build.query<Notification[], null>({
            query: () => ({
                url: "/notifications",
            }),
        }),
    }),
    overrideExisting: false,
});

export const useFetchNotifications = notifications.useFetchNotificationsQuery;
