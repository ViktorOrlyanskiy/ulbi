import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useMemo } from "react";
import { getUserAuthData, getUserRoles, UserRole } from "@/entities/User";
import { RoutePath } from "@/shared/const";

interface RequireAuthProps {
    children: React.ReactNode;
    roles?: UserRole[];
}

export function RequireAuth({
    children,
    roles,
}: RequireAuthProps): JSX.Element {
    const isAuth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!isAuth) {
        // редирект на главную страницу если пользователь не авторизован
        return (
            <Navigate to={RoutePath.main} state={{ from: location }} replace />
        );
    }

    if (!hasRequiredRoles) {
        // редирект на страницу "нет доступа" если у пользователя нет нужной роли
        return (
            <Navigate
                to={RoutePath.forbidden}
                state={{ from: location }}
                replace
            />
        );
    }
    // eslint-disable-next-line
    return <>{children}</>;
}
