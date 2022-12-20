import { screen } from "@testing-library/react";
import { componentRender } from "@/app/config/tests";
import {
    getRouteAbout,
    getRouteAdminPanel,
    getRouteProfile,
} from "@/shared/const";
import { AppRouter } from "./AppRouter";
import { UserRole } from "@/entities/User";

describe("AppRouter", () => {
    test("Страница должна отрендериться", async () => {
        componentRender(<AppRouter />, { route: getRouteAbout() });

        const page = await screen.findByTestId("AboutPage");
        expect(page).toBeInTheDocument();
    });

    test("Страница не найдена", async () => {
        componentRender(<AppRouter />, { route: "/fjdkfjdkfdjf" });

        const page = await screen.findByTestId("NotFoundPage");
        expect(page).toBeInTheDocument();
    });

    test("Редирект неавторизованного пользователя на главную", async () => {
        componentRender(<AppRouter />, { route: getRouteProfile("1") });

        const page = await screen.findByTestId("MainPage");
        expect(page).toBeInTheDocument();
    });

    test("Доступ к закрытой странице авторизованного пользователя", async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile("1"),
            initialState: {
                user: { _inited: true, authData: {} },
            },
        });

        const page = await screen.findByTestId("ProfilePage");
        expect(page).toBeInTheDocument();
    });

    test("Доступ запрещен (отсутствует роль)", async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: { _inited: true, authData: {} },
            },
        });

        const page = await screen.findByTestId("ForbiddenPage");
        expect(page).toBeInTheDocument();
    });

    test("Доступ разрешен (присутствует роль)", async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
            },
        });

        const page = await screen.findByTestId("AdminPanelPage");
        expect(page).toBeInTheDocument();
    });
});
