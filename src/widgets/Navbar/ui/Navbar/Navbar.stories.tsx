import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator, ThemeDecorator } from "app/config/storybook";
import { Navbar } from "./Navbar";

export default {
    title: "widgets/Navbar",
    component: Navbar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Auth = Template.bind({});
Auth.args = {};
Auth.decorators = [StoreDecorator({ user: { authData: {} } })];