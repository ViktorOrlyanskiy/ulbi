import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";
import { Button, ButtonTheme, Input } from "shared/ui";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { t } = useTranslation();
    const { className } = props;

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                className={cls.input}
                autoFocus
                placeholder={t("Введите логин")}
            />
            <Input className={cls.input} placeholder={t("Введите пароль")} />
            <Button theme={ButtonTheme.BACKGROUND_INVERTED}>
                {t("Войти")}
            </Button>
        </div>
    );
};
