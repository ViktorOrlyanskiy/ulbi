import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "app/config/storybook";
import { Text, TextTheme } from "./Text";
import { TextAlign, TextWeight } from "..";

export default {
    title: "shared/Text",
    component: Text,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "Title Title",
    text: "Text Text Text Text Text Text Text",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: "Title Title",
    text: "Text Text Text Text Text Text Text",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: "Title Title",
    text: "Text Text Text Text Text Text Text",
    theme: TextTheme.ERROR,
};

export const AlignLeft = Template.bind({});
AlignLeft.args = {
    title: "Title Title",
    text: "Text Text Text Text Text Text Text",
    align: TextAlign.LEFT,
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
    title: "Title Title",
    text: "Text Text Text Text Text Text Text",
    align: TextAlign.CENTER,
};

export const AlignRight = Template.bind({});
AlignRight.args = {
    title: "Title Title",
    text: "Text Text Text Text Text Text Text",
    align: TextAlign.RIGHT,
};

export const WeightLight = Template.bind({});
WeightLight.args = {
    title: "Title Title",
    text: "Text Text Text Text Text Text Text",
    weight: TextWeight.LIGHT,
};

export const WeightNormal = Template.bind({});
WeightNormal.args = {
    title: "Title Title",
    text: "Text Text Text Text Text Text Text",
    weight: TextWeight.NORMAL,
};

export const WeightBold = Template.bind({});
WeightBold.args = {
    title: "Title Title",
    text: "Text Text Text Text Text Text Text",
    weight: TextWeight.BOLD,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: "Title Title",
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: "Title Title",
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: "Text Text Text Text Text Text Text",
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: "Text Text Text Text Text Text Text",
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
