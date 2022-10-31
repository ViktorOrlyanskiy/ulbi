import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getUserAuthData } from "entities/User";
import { RoutePath } from "shared/const";

export function RequireAuth({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    const isAuth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!isAuth) {
        // Redirect them to the "/" page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return (
            <Navigate to={RoutePath.main} state={{ from: location }} replace />
        );
    }
    // eslint-disable-next-line
    return <>{children}</>;
}
