import { getUserInited, userActions } from "entities/User";
import { FC, memo, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";

import { Navbar } from "widgets/Navbar";
import { PageLoader } from "widgets/PageLoader";
import { Sidebar } from "widgets/Sidebar";
import { useAppDispatch, useTheme } from "shared/hooks";
import { classNames } from "shared/lib";
import { AppRouter } from "./providers/AppRouter";

export const App: FC = memo(() => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />

                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
});
