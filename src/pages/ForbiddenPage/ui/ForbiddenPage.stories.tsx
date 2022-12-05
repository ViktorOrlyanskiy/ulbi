import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "app/config/storybook";
import { Theme } from "app/providers/ThemeProvider";
import ForbiddenPage from "./ForbiddenPage";

export default {
    title: "defaultCategory/ForbiddenPage",
    component: ForbiddenPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = () => <ForbiddenPage />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
