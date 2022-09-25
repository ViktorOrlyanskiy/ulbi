import { FC } from "react";
import { useTheme } from "shared/hooks";
import { classNames } from "shared/lib";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Theme } from "app/providers/ThemeProviders";
import { Button } from "shared/ui";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
