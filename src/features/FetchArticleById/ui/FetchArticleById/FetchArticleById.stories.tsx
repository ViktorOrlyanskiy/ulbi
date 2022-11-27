import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator, ThemeDecorator } from "app/config/storybook";
import { FetchArticleById } from "./FetchArticleById";

export default {
    title: "defaultCategory/FetchArticleById",
    component: FetchArticleById,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof FetchArticleById>;

const Template: ComponentStory<typeof FetchArticleById> = (args) => (
    <FetchArticleById {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
