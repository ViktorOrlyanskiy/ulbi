import { FC, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY } from "shared/const";
import { ThemeContext, Theme, ThemeContextProps } from "../lib/ThemeContext";

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps: ThemeContextProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    );
    document.body.className = theme;

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
