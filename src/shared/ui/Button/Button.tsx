import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib";
import cls from "./Button.module.scss";

export enum ThemeButton {}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, theme, children, ...otherProps } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
