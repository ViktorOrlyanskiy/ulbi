import { FC, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";
import { useTheme } from "./theme/useTheme";
import "./styles/index.scss";
import { classNames } from "./helpers/classNames";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

export const App: FC = () => {
    const { theme, toggleTheme } = useTheme();
    const hovered = true;
    return (
        <div className={classNames("app", { hovered }, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to="/">Главная</Link>
            <Link to="/about">О нас</Link>
            <Suspense fallback={<p>Loading....</p>}>
                <Routes>
                    <Route path="/about" element={<AboutPageAsync />} />
                    <Route path="/" element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};
