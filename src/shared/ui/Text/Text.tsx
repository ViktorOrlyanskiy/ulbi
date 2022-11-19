import { FC, memo } from "react";
import { classNames } from "shared/lib";
import cls from "./Text.module.scss";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
}

export enum TextSize {
    S = "size_s",
    M = "size_m",
    L = "size_l",
}

export enum TextAlign {
    RIGHT = "right",
    LEFT = "left",
    CENTER = "center",
}

export enum TextWeight {
    LIGHT = "light",
    NORMAL = "normal",
    BOLD = "bold",
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    size?: TextSize;
    align?: TextAlign;
    weight?: TextWeight;
}

export const Text: FC<TextProps> = memo((props) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        size = TextSize.M,
        align = TextAlign.LEFT,
        weight = TextWeight.NORMAL,
    } = props;
    return (
        <div
            className={classNames("", {}, [
                className,
                cls[theme],
                cls[size],
                cls[align],
                cls[weight],
            ])}
        >
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
