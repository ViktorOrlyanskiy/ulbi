import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/app/config/storybook";
import { Input, InputSize, InputTheme } from "./Input";

export default {
    title: "shared/Input",
    component: Input,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const OutlineValue = Template.bind({});
OutlineValue.args = {
    value: "Text",
    theme: InputTheme.OUTLINE,
    size: InputSize.M,
};

export const OutlineM = Template.bind({});
OutlineM.args = {
    placeholder: "Text",
    theme: InputTheme.OUTLINE,
    size: InputSize.M,
};

export const OutlineL = Template.bind({});
OutlineL.args = {
    placeholder: "Text",
    theme: InputTheme.OUTLINE,
    size: InputSize.L,
};

export const OutlineXL = Template.bind({});
OutlineXL.args = {
    placeholder: "Text",
    theme: InputTheme.OUTLINE,
    size: InputSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    placeholder: "Text",
    theme: InputTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDarkValue = Template.bind({});
OutlineDarkValue.args = {
    value: "Text",
    theme: InputTheme.OUTLINE,
};
OutlineDarkValue.decorators = [ThemeDecorator(Theme.DARK)];

export const Password = Template.bind({});
Password.args = {
    value: "text",
    type: "password",
};

export const Readonly = Template.bind({});
Readonly.args = {
    placeholder: "Text",
    readonly: true,
};
