import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Notification } from "../../model/types/notification";
import { NotificationsList } from "./NotificationsList";

const notification: Notification = {
    id: "1",
    title: "Title 1",
    description: "Description 1",
    userId: "1",
    href: "href",
};

export default {
    title: "entities/NotificationsList",
    component: NotificationsList,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof NotificationsList>;

const Template: ComponentStory<typeof NotificationsList> = (args) => (
    <NotificationsList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    notifications: [
        { ...notification, id: "1" },
        { ...notification, id: "2" },
        { ...notification, id: "3" },
    ],
};

export const Loading = Template.bind({});
Loading.args = { isLoading: true };
