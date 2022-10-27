import { FC, memo } from "react";
import { classNames } from "shared/lib";
import cls from "./Text.module.scss";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
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
    align?: TextAlign;
    weight?: TextWeight;
}

export const Text: FC<TextProps> = memo((props) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        weight = TextWeight.NORMAL,
    } = props;
    return (
        <div
            className={classNames("", {}, [
                className,
                cls[theme],
                cls[align],
                cls[weight],
            ])}
        >
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
