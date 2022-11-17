import { FC, InputHTMLAttributes, memo, useRef, useState } from "react";
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
    onlyIntegerNumber?: boolean;
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
        onlyIntegerNumber,
        onChange,
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);
    const [typeInput, setTypeInput] = useState(type);
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);

    // проверяет что в инпут вводиться только число
    const checkForIntegerNumber = (
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (!/[0-9(Backspace)(Arrow)(Delete)]/.test(e.key)) {
            e.preventDefault();
        }
    };

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) =>
        onlyIntegerNumber ? checkForIntegerNumber(e) : undefined;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onChangeType = () => {
        setIsVisiblePassword((prev) => !prev);
        setTypeInput(isVisiblePassword ? "text" : "password");
    };

    return (
        <label className={cls.label}>
            <input
                ref={inputRef}
                type={typeInput}
                readOnly={readonly}
                value={value}
                onKeyDown={onKeyDownHandler}
                onChange={onChangeHandler}
                className={classNames(cls.Input, { [cls.readonly]: readonly }, [
                    className,
                    cls[theme],
                    cls[size],
                ])}
                {...otherProps}
            />
            {type === "password" && (
                <span
                    onClick={onChangeType}
                    className={`${cls.iconPassword} ${
                        isVisiblePassword ? cls.eye : cls.eyeSlash
                    }`}
                />
            )}
        </label>
    );
});
