import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/app/config/storybook";
import { Button, ButtonSize, ButtonTheme } from "./Button";

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    children: "Text",
};

export const OutlineM = Template.bind({});
OutlineM.args = {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
};

export const OutlineL = Template.bind({});
OutlineL.args = {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineXL = Template.bind({});
OutlineXL.args = {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
    children: "Text",
    theme: ButtonTheme.BACKGROUND,
};

export const SquareM = Template.bind({});
SquareM.args = {
    children: ">",
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.M,
    square: true,
};

export const SquareL = Template.bind({});
SquareL.args = {
    children: ">",
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.L,
    square: true,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: ">",
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.XL,
    square: true,
};
