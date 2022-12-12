import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from "@/entities/User";
import { RoutePath } from "@/shared/const";
import { useAppDispatch } from "@/shared/hooks";
import {
    AppLink,
    Avatar,
    Button,
    ButtonTheme,
    Dropdown,
    Position,
    VStack,
} from "@/shared/ui";
import cls from "./UserMenu.module.scss";

interface UserMenuProps {
    className?: string;
}

export const UserMenu: FC<UserMenuProps> = memo(() => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <Dropdown
            marginFromTrigger={15}
            maxHeightPopup={300}
            position={Position.BOTTOM_RIGHT}
            className={cls.popup}
            trigger={<Avatar src={authData?.avatar} size={30} />}
        >
            <VStack gap="4">
                {isAdminPanelAvailable && (
                    <AppLink to={RoutePath.admin_panel} className={cls.item}>
                        {t("Админпанель")}
                    </AppLink>
                )}
                <AppLink
                    to={`${RoutePath.profile}${authData?.id}`}
                    className={cls.item}
                >
                    {t("Профиль")}
                </AppLink>
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onLogout}
                    className={cls.item}
                >
                    {t("Выйти")}
                </Button>
            </VStack>
        </Dropdown>
    );
});
