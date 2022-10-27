import { Suspense, FC, memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { PageLoader } from "widgets/PageLoader";
import { getUserAuthData } from "entities/User";
import { routeConfig } from "../lib/routeConfig";

export const AppRouter: FC = memo(() => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(
        () =>
            Object.values(routeConfig).filter((route) => {
                if (route.authOnly && !isAuth) {
                    return false;
                }
                return true;
            }),
        [isAuth]
    );

    return (
        <div className="page-wrapper">
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {routes.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </Suspense>
        </div>
    );
});
