import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator, ThemeDecorator } from "app/config/storybook";
import { FetchArticles } from "./FetchArticles";

export default {
    title: "defaultCategory/FetchArticles",
    component: FetchArticles,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof FetchArticles>;

const Template: ComponentStory<typeof FetchArticles> = (args) => (
    <FetchArticles {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
