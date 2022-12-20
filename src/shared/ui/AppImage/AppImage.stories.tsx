import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator, ThemeDecorator } from "@/app/config/storybook";
import { AppImage } from "./AppImage";

export default {
    title: "defaultCategory/AppImage",
    component: AppImage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => (
    <AppImage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
