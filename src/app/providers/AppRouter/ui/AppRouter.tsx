import { Suspense, FC } from "react";
import { Routes, Route } from "react-router-dom";
import { PageLoader } from "widgets/PageLoader";
import { routeConfig } from "../lib/routeConfig";

export const AppRouter: FC = () => (
    <div className="page-wrapper">
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    </div>
);
