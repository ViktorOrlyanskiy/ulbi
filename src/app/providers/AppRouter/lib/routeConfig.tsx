import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { ProfilePage } from "pages/ProfilePage";
import { NotFoundPage } from "pages/NotFoundPage";
import { AppRoutes, RoutePath } from "shared/const";
import { MapPage } from "pages/MapPage";
import { ArticlesPage } from "pages/ArticlesPage";
import { ArticleDetailsPage } from "pages/ArticleDetailsPage";
import { ArticleCreatePage } from "pages/ArticleCreatePage";
import { ArticleEditPage } from "pages/ArticleEditPage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
        authOnly: false,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
        authOnly: false,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.MAP]: {
        path: RoutePath.map,
        element: <MapPage />,
        authOnly: false,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: RoutePath.article_create,
        element: <ArticleCreatePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: `${RoutePath.article_edit}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },

    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
        authOnly: false,
    },
};
