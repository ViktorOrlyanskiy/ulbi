import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator, ThemeDecorator } from "app/config/storybook";
import { FetchNotifications } from "./FetchNotifications";

export default {
    title: "defaultCategory/FetchNotifications",
    component: FetchNotifications,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof FetchNotifications>;

const Template: ComponentStory<typeof FetchNotifications> = (args) => (
    <FetchNotifications {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
