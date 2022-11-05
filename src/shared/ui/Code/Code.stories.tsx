import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "app/config/storybook";
import { Theme } from "app/providers/ThemeProvider";
import { Code } from "./Code";

export default {
    title: "shared/Code",
    component: Code,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: `export default {
    title: "shared/Code",
    component: Code,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Code>;`,
};

export const Dark = Template.bind({});
Dark.args = {
    children: `export default {
    title: "shared/Code",
    component: Code,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Code>;`,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
