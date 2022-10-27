import React, { FC, InputHTMLAttributes, memo, useRef } from "react";
import { classNames } from "shared/lib";
import cls from "./Input.module.scss";

export enum InputTheme {
    OUTLINE = "outline",
    OUTLINE_INVERTED = "outlineInverted",
}
export enum InputSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "size" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    theme?: InputTheme;
    size?: InputSize;
    value?: string | number;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        className,
        type = "text",
        theme = InputTheme.OUTLINE,
        size = InputSize.M,
        readonly,
        value,
        onChange,
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            ref={inputRef}
            type={type}
            readOnly={readonly}
            value={value}
            onChange={onChangeHandler}
            className={classNames(cls.Input, { [cls.readonly]: readonly }, [
                className,
                cls[theme],
                cls[size],
            ])}
            {...otherProps}
        />
    );
});
