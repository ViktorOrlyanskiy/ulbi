import { getUserAuthData, userActions } from "entities/User";
import { FC, memo, useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RoutePath } from "shared/const";
import { useAppDispatch } from "shared/hooks";
import { classNames } from "shared/lib";
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

export const UserMenu: FC<UserMenuProps> = memo((props) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const triggerRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setOpen] = useState(false);
    const authData = useSelector(getUserAuthData);

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
                    maxHeightPopup={90}
                    hiddenPopup={onToggle}
                    position={Position.BOTTOM_RIGHT}
                    className={cls.popup}
                >
                    <VStack gap="4">
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
