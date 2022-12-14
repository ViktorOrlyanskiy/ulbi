import { Suspense, FC, memo, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { PageLoader } from "@/widgets/PageLoader";
import { routeConfig, AppRoutesProps } from "../lib/routeConfig";
import { RequireAuth } from "./RequireAuth";

export const AppRouter: FC = memo(() => {
    const renderWithWrapper = useCallback(
        ({ path, element, authOnly, roles }: AppRoutesProps) => (
            <Route
                key={path}
                path={path}
                element={
                    authOnly ? (
                        <RequireAuth roles={roles}>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        ),
        []
    );

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    );
});
