import { FC, HTMLAttributes } from "react";
import { classNames } from "shared/lib";
import cls from "./Card.module.scss";

export enum CardTheme {
    PRIMARY = "primary",
    OUTLINE = "outline",
}

export enum CardSize {
    S = "size_s",
    M = "size_m",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    theme?: CardTheme;
    size?: CardSize;
}

export const Card: FC<CardProps> = (props) => {
    const {
        className,
        theme = CardTheme.PRIMARY,
        size = CardSize.M,
        children,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.Card, {}, [
                className,
                cls[theme],
                cls[size],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
