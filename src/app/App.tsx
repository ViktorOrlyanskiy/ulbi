import { FC, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { useTheme } from "shared/hooks";
import { classNames } from "shared/lib";
import "./styles/index.scss";

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
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};
