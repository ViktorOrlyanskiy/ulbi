export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    PROFILE = "profile",
    MAP = "map",
    ARTICLES = "articles",
    ARTICLE_DETAILS = "article_details",

    // last
    NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile/", // + id
    [AppRoutes.MAP]: "/map",
    [AppRoutes.ARTICLES]: "/articles",
    [AppRoutes.ARTICLE_DETAILS]: "/articles/", // + id

    // last
    [AppRoutes.NOT_FOUND]: "*",
};
