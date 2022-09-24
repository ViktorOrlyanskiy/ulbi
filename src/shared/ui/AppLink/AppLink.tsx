import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
    PRIMERY = "primary",
    INVERTED = "inverted",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { to, className, theme = AppLinkTheme.PRIMERY, children, ...otherProps } = props;

    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};
