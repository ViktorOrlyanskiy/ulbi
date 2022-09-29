import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/App";
import { ThemeDecorator } from "app/config/storybook";
import { AppLink } from "./AppLink";

export default {
    title: "shared/AppLink",
    component: AppLink,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
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
