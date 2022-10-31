import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator, ThemeDecorator } from "app/config/storybook";
import { Select } from "./Select";

export default {
    title: "shared/Select",
    component: Select,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    value: "Armenia",
    options: [
        { value: "Armenia", content: "Armenia" },
        { value: "Belarus", content: "Belarus" },
    ],
};
Primary.decorators = [];

export const Readonly = Template.bind({});
Readonly.args = {
    value: "Armenia",
    readonly: true,
    options: [
        { value: "Armenia", content: "Armenia" },
        { value: "Belarus", content: "Belarus" },
    ],
};

export const Dark = Template.bind({});
Dark.args = {
    value: "Armenia",
    options: [
        { value: "Armenia", content: "Armenia" },
        { value: "Belarus", content: "Belarus" },
    ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
