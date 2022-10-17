import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib";
import { Button, ButtonTheme, Input, Text, TextTheme } from "shared/ui";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState);

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
