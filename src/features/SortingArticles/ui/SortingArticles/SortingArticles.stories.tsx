import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator, ThemeDecorator } from "app/config/storybook";
import { SortingArticles } from "./SortingArticles";

export default {
    title: "defaultCategory/SortingArticles",
    component: SortingArticles,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof SortingArticles>;

const Template: ComponentStory<typeof SortingArticles> = (args) => (
    <SortingArticles {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
