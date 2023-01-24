import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
    AdditionalStyleDecorator,
    StoreDecorator,
} from "@/app/config/storybook";
import { Notification } from "@/entities/Notification";
import { FetchNotifications } from "./FetchNotifications";

export default {
    title: "features/FetchNotifications",
    component: FetchNotifications,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [AdditionalStyleDecorator({ paddingLeft: 600 })],
} as ComponentMeta<typeof FetchNotifications>;

const Template: ComponentStory<typeof FetchNotifications> = (args) => (
    <FetchNotifications {...args} />
);

const notification: Notification = {
    id: "1",
    title: "Title 1",
    description: "Description 1",
    userId: "1",
    href: "href",
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
Primary.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: "GET",
            status: 200,
            response: [
                { ...notification, id: "1" },
                { ...notification, id: "2" },
                { ...notification, id: "3" },
            ],
        },
    ],
};

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({})];
Error.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: "GET",
            status: 500,
            response: [],
        },
    ],
};
