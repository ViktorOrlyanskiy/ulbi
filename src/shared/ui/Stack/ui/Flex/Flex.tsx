import { FC, HTMLAttributes, DetailedHTMLProps } from "react";
import { classNames } from "shared/lib";
import cls from "./Flex.module.scss";

export type FlexJustify = "start" | "center" | "end" | "between";
export type FlexAlign = "start" | "center" | "end";
export type FlexDirection = "row" | "column";
export type FlexGap = "4" | "8" | "12" | "16" | "24" | "32" | "40";

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};
const gapClasses: Record<FlexGap, string> = {
    4: cls.gap_4,
    8: cls.gap_8,
    12: cls.gap_12,
    16: cls.gap_16,
    24: cls.gap_24,
    32: cls.gap_32,
    40: cls.gap_40,
};

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FlexProps extends DivProps {
    className?: string;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
    wrap?: boolean;
}

export const Flex: FC<FlexProps> = (props) => {
    const {
        className,
        justify = "start",
        align = "center",
        direction = "row",
        children,
        gap,
        max,
        wrap,
    } = props;

    const mods = { [cls.max]: max, [cls.wrap]: wrap };

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    return (
        <div className={classNames(cls.Flex, mods, classes)}>{children}</div>
    );
};
