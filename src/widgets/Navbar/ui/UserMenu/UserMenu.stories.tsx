import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import {
    StoreDecorator,
    ThemeDecorator,
    AdditionalStyleDecorator,
} from "app/config/storybook";
import { UserRole } from "entities/User";
import { UserMenu } from "./UserMenu";

export default {
    title: "widgets/navbar/UserMenu",
    component: UserMenu,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [AdditionalStyleDecorator({ paddingLeft: 200 })],
} as ComponentMeta<typeof UserMenu>;

const Template: ComponentStory<typeof UserMenu> = (args) => (
    <UserMenu {...args} />
);

export const LightUser = Template.bind({});
LightUser.args = {};
LightUser.decorators = [StoreDecorator({})];

export const LightAdmin = Template.bind({});
LightAdmin.args = {};
LightAdmin.decorators = [
    StoreDecorator({ user: { authData: { roles: [UserRole.ADMIN] } } }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
