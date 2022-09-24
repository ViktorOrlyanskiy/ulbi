import { FC, Suspense } from "react";
import { useTheme } from "shared/hooks";
import { classNames } from "shared/lib";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

export const App: FC = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
