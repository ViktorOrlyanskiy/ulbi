import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "app/config/storybook";
import { Textarea, TextareaSize, TextareaTheme } from "./Textarea";

export default {
    title: "shared/Textarea",
    component: Textarea,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
    <Textarea {...args} />
);

export const OutlineValue = Template.bind({});
OutlineValue.args = {
    value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eveniet error adipisci harum, ducimus exercitationem quos porro aliquid aperiam ipsum suscipit assumenda reiciendis odit aut hic dolorum officiis incidunt culpa.",

    theme: TextareaTheme.OUTLINE,
    size: TextareaSize.M,
};

export const OutlineM = Template.bind({});
OutlineM.args = {
    placeholder:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eveniet error adipisci harum, ducimus exercitationem quos porro aliquid aperiam ipsum suscipit assumenda reiciendis odit aut hic dolorum officiis incidunt culpa.",

    theme: TextareaTheme.OUTLINE,
    size: TextareaSize.M,
};

export const OutlineL = Template.bind({});
OutlineL.args = {
    placeholder:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eveniet error adipisci harum, ducimus exercitationem quos porro aliquid aperiam ipsum suscipit assumenda reiciendis odit aut hic dolorum officiis incidunt culpa.",

    theme: TextareaTheme.OUTLINE,
    size: TextareaSize.L,
};

export const OutlineXL = Template.bind({});
OutlineXL.args = {
    placeholder:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eveniet error adipisci harum, ducimus exercitationem quos porro aliquid aperiam ipsum suscipit assumenda reiciendis odit aut hic dolorum officiis incidunt culpa.",

    theme: TextareaTheme.OUTLINE,
    size: TextareaSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    placeholder:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eveniet error adipisci harum, ducimus exercitationem quos porro aliquid aperiam ipsum suscipit assumenda reiciendis odit aut hic dolorum officiis incidunt culpa.",

    theme: TextareaTheme.OUTLINE,
    size: TextareaSize.M,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDarkValue = Template.bind({});
OutlineDarkValue.args = {
    value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eveniet error adipisci harum, ducimus exercitationem quos porro aliquid aperiam ipsum suscipit assumenda reiciendis odit aut hic dolorum officiis incidunt culpa.",

    theme: TextareaTheme.OUTLINE,
    size: TextareaSize.M,
};
OutlineDarkValue.decorators = [ThemeDecorator(Theme.DARK)];

export const Readonly = Template.bind({});
Readonly.args = {
    placeholder:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eveniet error adipisci harum, ducimus exercitationem quos porro aliquid aperiam ipsum suscipit assumenda reiciendis odit aut hic dolorum officiis incidunt culpa.",
    readonly: true,
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
