import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator, ThemeDecorator } from "app/config/storybook";
import AddNewComment from "./AddNewComment";

export default {
    title: "defaultCategory/AddNewComment",
    component: AddNewComment,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof AddNewComment>;

const Template: ComponentStory<typeof AddNewComment> = (args) => (
    <AddNewComment {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
