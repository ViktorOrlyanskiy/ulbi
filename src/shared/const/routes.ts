export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    PROFILE = "profile",
    MAP = "map",

    // last
    NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.MAP]: "/map",

    // last
    [AppRoutes.NOT_FOUND]: "*",
};
