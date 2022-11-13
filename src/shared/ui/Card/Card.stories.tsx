import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "app/config/storybook";
import { Text } from "shared/ui";
import { Card } from "./Card";

export default {
    title: "shared/Card",
    component: Card,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    // eslint-disable-next-line
    children: <Text title="title" text="text tetx text" />,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    // eslint-disable-next-line
    children: <Text title="title" text="text tetx text" />,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
