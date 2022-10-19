import { FC, memo } from "react";
import { useTheme } from "shared/hooks";
import { classNames } from "shared/lib";
import LightIcon from "shared/assets/icons/brightness.svg";
import DarkIcon from "shared/assets/icons/moon.svg";
import { Theme } from "app/providers/ThemeProvider";
import { Button } from "shared/ui";
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
