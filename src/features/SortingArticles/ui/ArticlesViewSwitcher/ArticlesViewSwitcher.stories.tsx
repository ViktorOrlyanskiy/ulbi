import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator, ThemeDecorator } from "app/config/storybook";
import { ArticlesViewSwitcher } from "./ArticlesViewSwitcher";

export default {
    title: "defaultCategory/ArticlesViewSwitcher",
    component: ArticlesViewSwitcher,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticlesViewSwitcher>;

const Template: ComponentStory<typeof ArticlesViewSwitcher> = (args) => (
    <ArticlesViewSwitcher {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
