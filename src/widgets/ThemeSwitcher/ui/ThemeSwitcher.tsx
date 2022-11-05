import { FC, memo } from "react";
import { Theme } from "app/providers/ThemeProvider";
import { useTheme } from "shared/hooks";
import { classNames } from "shared/lib";
import { Button } from "shared/ui";
import LightIcon from "shared/assets/icons/sidebar/brightness.svg";
import DarkIcon from "shared/assets/icons/sidebar/moon.svg";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames("", {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? (
                <DarkIcon className={cls.icon} />
            ) : (
                <LightIcon className={cls.icon} />
            )}
        </Button>
    );
});
