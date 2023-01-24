import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoreDecorator } from "@/app/config/storybook";
import { NotificationItem } from "./NotificationItem";

const notification = {
    id: "1",
    title: "Title",
    description: "Description",
    userId: "1",
    href: "href",
};

export default {
    title: "entities/NotificationItem",
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = { notification };
Primary.decorators = [StoreDecorator({})];
