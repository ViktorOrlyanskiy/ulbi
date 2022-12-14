import { addDecorator } from "@storybook/react";
import {
    StyleDecorator,
    ThemeDecorator,
    RouterDecorator,
    StoreDecorator,
    SuspenseDecorator,
    AdditionalStyleDecorator,
} from "../../src/app/config/storybook";
import { Theme } from "../../src/app/providers/ThemeProvider";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    themes: {
        default: "light",
        list: [
            { name: "light", class: Theme.LIGHT, color: "#fff" },
            { name: "dark", class: Theme.DARK, color: "#000" },
        ],
    },
};

addDecorator(StyleDecorator);
// addDecorator(StoreDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
addDecorator(AdditionalStyleDecorator());
