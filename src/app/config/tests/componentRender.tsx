import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import i18nForTests from "app/config/i18n/i18nForTest";

export interface renderWithRouterOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (
    component: ReactNode,
    options: renderWithRouterOptions = {}
) => {
    const { route = "/", initialState } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
};
