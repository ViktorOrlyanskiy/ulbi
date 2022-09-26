import { FC, Suspense } from "react";
import { useTheme } from "shared/hooks";
import { classNames } from "shared/lib";
import { Navbar } from "widgets/Navbar";
import { PageLoader } from "widgets/PageLoader";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/AppRouter";
import "./styles/index.scss";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

export const App: FC = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
