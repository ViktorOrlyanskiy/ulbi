import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator, ThemeDecorator } from "app/config/storybook";
import ArticleCreatePage from "./ArticleCreatePage";

export default {
    title: "defaultCategory/ArticleCreatePage",
    component: ArticleCreatePage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticleCreatePage>;

const Template: ComponentStory<typeof ArticleCreatePage> = (args) => (
    <ArticleCreatePage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
