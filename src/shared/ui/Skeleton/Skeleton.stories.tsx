import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "app/config/storybook";
import { Skeleton } from "./Skeleton";

export default {
    title: "shared/Skeleton",
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <Skeleton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    height: 200,
    width: 200,
    borderRadius: "50%",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    height: 200,
    width: 200,
    borderRadius: "50%",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
