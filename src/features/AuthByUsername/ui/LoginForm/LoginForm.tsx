import { FC, KeyboardEvent, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib";
import {
    ReducersList,
    useAppDispatch,
    useDynamicModuleLoader,
} from "@/shared/hooks";
import { Button, ButtonTheme, Input, Text, TextTheme, VStack } from "@/shared/ui";

import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import cls from "./LoginForm.module.scss";

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo(({ className, onSuccess }) => {
    useDynamicModuleLoader(initialReducers);
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === "fulfilled") {
            onSuccess();
        }
    }, [dispatch, username, password, onSuccess]);

    const onLoginKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                onLoginClick();
            }
        },
        [onLoginClick]
    );

    return (
        <VStack
            justify="center"
            align="end"
            className={classNames(cls.LoginForm, {}, [className])}
        >
            <Text title={t("Форма авторизации")} className={cls.title} />
            {error && (
                <Text
                    theme={TextTheme.ERROR}
                    text={t("Вы ввели неверный логин или пароль")}
                    className={cls.error}
                />
            )}
            <Input
                autoFocus
                className={cls.input}
                placeholder={t("Введите логин")}
                value={username}
                onChange={onChangeUsername}
            />
            <Input
                className={cls.input}
                placeholder={t("Введите пароль")}
                value={password}
                onChange={onChangePassword}
            />
            <Button
                theme={ButtonTheme.BACKGROUND}
                onClick={onLoginClick}
                onKeyDown={onLoginKeyDown}
                disabled={isLoading}
            >
                {t("Войти")}
            </Button>
        </VStack>
    );
});

export default LoginForm;
