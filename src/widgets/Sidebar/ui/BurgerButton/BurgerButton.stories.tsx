import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator, ThemeDecorator } from "app/config/storybook";
import { BurgerButton } from "./BurgerButton";

export default {
    title: "defaultCategory/BurgerButton",
    component: BurgerButton,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof BurgerButton>;

const Template: ComponentStory<typeof BurgerButton> = (args) => (
    <BurgerButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
