import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "@/app/config/tests";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
    test("test render", () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("test toggle", () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
