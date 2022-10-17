import { userActions } from "entities/User";
import { FC, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "shared/hooks";
import { classNames } from "shared/lib";
import { Navbar } from "widgets/Navbar";
import { PageLoader } from "widgets/PageLoader";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/AppRouter";

export const App: FC = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
