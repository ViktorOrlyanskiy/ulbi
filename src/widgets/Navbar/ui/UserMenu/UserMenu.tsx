import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from "entities/User";
import { FC, memo, useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RoutePath } from "shared/const";
import { useAppDispatch } from "shared/hooks";
import {
    AppLink,
    Avatar,
    Button,
    ButtonTheme,
    Popup,
    Position,
    VStack,
} from "shared/ui";
import cls from "./UserMenu.module.scss";

interface UserMenuProps {
    className?: string;
}

const HEIGHT_ITEM = 32;
const FIXED_HEIGHT = 27;

export const UserMenu: FC<UserMenuProps> = memo(() => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const triggerRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setOpen] = useState(false);

    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;

    const heightPopup = isAdminPanelAvailable
        ? HEIGHT_ITEM * 3 + FIXED_HEIGHT
        : HEIGHT_ITEM * 2 + FIXED_HEIGHT;

    const onToggle = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <>
            <div ref={triggerRef} onClick={onToggle} className={cls.trigger}>
                <Avatar src={authData?.avatar} size={30} />
            </div>
            {isOpen && (
                <Popup
                    triggerRef={triggerRef}
                    marginFromTrigger={15}
                    maxHeightPopup={heightPopup}
                    hiddenPopup={onToggle}
                    position={Position.BOTTOM_RIGHT}
                    className={cls.popup}
                >
                    <VStack gap="4">
                        {isAdminPanelAvailable && (
                            <AppLink
                                to={RoutePath.admin_panel}
                                className={cls.item}
                            >
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
                </Popup>
            )}
        </>
    );
});
