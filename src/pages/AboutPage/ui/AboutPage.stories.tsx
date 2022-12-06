import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator, StoreDecorator } from "app/config/storybook";
import { Theme } from "app/providers/ThemeProvider";
import AboutPage from "./AboutPage";

export default {
    title: "pages/AboutPage",
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
