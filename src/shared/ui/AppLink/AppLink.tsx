import { FC, memo } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const { to, className, theme, children, ...otherProps } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
