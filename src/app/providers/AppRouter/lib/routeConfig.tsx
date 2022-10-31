import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { ProfilePage } from "pages/ProfilePage";
import { NotFoundPage } from "pages/NotFoundPage";
import { AppRoutes, RoutePath } from "shared/const";
import { MapPage } from "pages/MapPage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: { path: RoutePath.main, element: <MainPage /> },
    [AppRoutes.ABOUT]: { path: RoutePath.about, element: <AboutPage /> },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.MAP]: { path: RoutePath.map, element: <MapPage /> },

    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
