import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { ProfilePage } from "pages/ProfilePage";
import { NotFoundPage } from "pages/NotFoundPage";
import { AppRoutes, RoutePath } from "shared/const";
import { MapPage } from "pages/MapPage";

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: { path: RoutePath.main, element: <MainPage /> },
    [AppRoutes.ABOUT]: { path: RoutePath.about, element: <AboutPage /> },
    [AppRoutes.PROFILE]: { path: RoutePath.profile, element: <ProfilePage /> },
    [AppRoutes.MAP]: { path: RoutePath.map, element: <MapPage /> },

    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
