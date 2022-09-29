import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/App";
import { ThemeDecorator } from "app/config/storybook";
import NotFoundPage from "./NotFoundPage";

export default {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => (
    <NotFoundPage {...args} />
);

export const Light = Template.bind({});
Light.args = {
    children: "Text",
};

export const Dark = Template.bind({});
Dark.args = {
    children: "Text",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
