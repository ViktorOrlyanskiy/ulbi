import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "app/config/storybook";
import { LoginModal } from "./LoginModal";

export default {
    title: "features/LoginModal",
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => (
    <LoginModal {...args} />
);

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = { isOpen: true };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
