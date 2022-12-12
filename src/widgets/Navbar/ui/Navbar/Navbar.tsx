import { FC, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { LoginModal } from "@/features/AuthByUsername";
import { FetchNotifications } from "@/features/FetchNotifications";
import { getUserAuthData } from "@/entities/User";
import { RoutePath } from "@/shared/const";
import { classNames } from "@/shared/lib";
import { AppLink, Button, ButtonTheme, HStack } from "@/shared/ui";
import cls from "./Navbar.module.scss";
import { UserMenu } from "../UserMenu/UserMenu";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    return authData ? (
        <header>
            <HStack
                max
                justify="end"
                gap="12"
                className={classNames(cls.Navbar, {}, [className])}
            >
                <AppLink to={RoutePath.article_create}>
                    <Button theme={ButtonTheme.OUTLINE}>
                        {t("Создать статью")}
                    </Button>
                </AppLink>
                <FetchNotifications />
                <UserMenu />
            </HStack>
        </header>
    ) : (
        <header>
            <HStack
                max
                justify="end"
                gap="12"
                className={classNames(cls.Navbar, {}, [className])}
            >
                <Button theme={ButtonTheme.BACKGROUND} onClick={onShowModal}>
                    {t("Войти")}
                </Button>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            </HStack>
        </header>
    );
});
