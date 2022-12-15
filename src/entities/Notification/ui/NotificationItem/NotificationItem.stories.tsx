import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator, ThemeDecorator } from "@/app/config/storybook";
import { NotificationItem } from "./NotificationItem";

export default {
    title: "defaultCategory/NotificationItem",
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];