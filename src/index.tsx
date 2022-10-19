import { render } from "react-dom";
import { App } from "app/App";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { StoreProvider } from "app/providers/StoreProvider";
import "app/config/i18n/i18n";
import "app/styles/index.scss";

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
