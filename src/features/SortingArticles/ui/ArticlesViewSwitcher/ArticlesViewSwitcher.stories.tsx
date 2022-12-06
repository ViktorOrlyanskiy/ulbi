import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "app/config/storybook";
import { ArticleView } from "entities/Article";
import { ArticlesViewSwitcher } from "./ArticlesViewSwitcher";

export default {
    title: "features/articles/ArticlesViewSwitcher",
    component: ArticlesViewSwitcher,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticlesViewSwitcher>;

const Template: ComponentStory<typeof ArticlesViewSwitcher> = (args) => (
    <ArticlesViewSwitcher {...args} />
);

export const Primary = Template.bind({});
Primary.args = { view: ArticleView.GRID };

export const PrimaryDark = Template.bind({});
PrimaryDark.args = { view: ArticleView.GRID };
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
