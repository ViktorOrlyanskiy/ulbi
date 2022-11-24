import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "app/config/storybook";
import { Tabs } from "./Tabs";

export default {
    title: "shared/Tabs",
    component: Tabs,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

const args = {
    value: "value2",
    onTabClick: action("onTabCLick"),
    tabs: [
        {
            value: "value1",
            content: "CONTENT 1",
        },
        {
            value: "value2",
            content: "CONTENT 2",
        },
        {
            value: "value3",
            content: "CONTENT 3",
        },
    ],
};

export const Primary = Template.bind({});
Primary.args = args;

export const PrimaryDark = Template.bind({});
PrimaryDark.args = args;
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
