import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator, ThemeDecorator } from "app/config/storybook";
import { FetchRecommendedArticles } from "./FetchRecommendedArticles";

export default {
    title: "defaultCategory/FetchRecommendedArticles",
    component: FetchRecommendedArticles,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof FetchRecommendedArticles>;

const Template: ComponentStory<typeof FetchRecommendedArticles> = (args) => (
    <FetchRecommendedArticles {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
