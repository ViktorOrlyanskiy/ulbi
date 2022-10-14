import React, {
    FC,
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from "react";
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
    "value" | "onChange" | "size"
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    theme?: InputTheme;
    size?: InputSize;
    autofocus?: boolean;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        className,
        type = "text",
        theme = InputTheme.OUTLINE,
        size = InputSize.M,
        autofocus = false,
        value,
        onChange,
        ...otherProps
    } = props;

    const [isFocus, setIsFocus] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocus(true);
            inputRef.current.focus();
        }
    }, [autofocus]);

    return (
        <input
            ref={inputRef}
            type={type}
            value={value}
            onChange={onChangeHandler}
            className={classNames(cls.Input, {}, [
                className,
                cls[theme],
                cls[size],
            ])}
            {...otherProps}
        />
    );
});
