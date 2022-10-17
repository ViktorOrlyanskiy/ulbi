import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "app/config/storybook";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default {
    title: "widgets/ThemeSwitcher",
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
    <ThemeSwitcher {...args} />
);

export const Light = Template.bind({});
Light.args = {
    children: "Text",
};

export const Dark = Template.bind({});
Dark.args = {
    children: "Text",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
