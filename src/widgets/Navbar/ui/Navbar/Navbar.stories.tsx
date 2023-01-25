import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoreDecorator } from "@/app/config/storybook";
import { UserRole } from "@/entities/User";
import { Navbar } from "./Navbar";
import { Notification } from "@/entities/Notification";

export default {
    title: "widgets/navbar/Navbar",
    component: Navbar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Navbar>;

const notification: Notification = {
    id: "1",
    title: "Title 1",
    description: "Description 1",
    userId: "1",
    href: "href",
};

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const AuthAdmin = Template.bind({});
AuthAdmin.args = {};
AuthAdmin.decorators = [
    StoreDecorator({ user: { authData: { roles: [UserRole.ADMIN] } } }),
];
AuthAdmin.parameters = {
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

export const AuthUser = Template.bind({});
AuthUser.args = {};
AuthUser.decorators = [
    StoreDecorator({ user: { authData: { roles: [UserRole.USER] } } }),
];
AuthUser.parameters = {
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
