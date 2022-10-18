import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib";
import { useDynamicModuleLoader, ReducersList } from "shared/hooks";
import { Button, ButtonTheme, Input, Text, TextTheme } from "shared/ui";

import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import cls from "./LoginForm.module.scss";

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
    useDynamicModuleLoader(initialReducers);
    const { t } = useTranslation();
    const dispatch = useDispatch();

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

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
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
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t("Войти")}
            </Button>
        </div>
    );
});

export default LoginForm;
