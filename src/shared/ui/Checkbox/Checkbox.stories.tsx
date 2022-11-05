import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "app/config/storybook";
import { Checkbox, CheckboxSize } from "./Checkbox";

export default {
    title: "shared/Checkbox",
    component: Checkbox,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
    <Checkbox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Focus = Template.bind({});
Focus.args = {
    autoFocus: true,
};

export const Check = Template.bind({});
Check.args = {
    checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};

export const DisabledCheck = Template.bind({});
DisabledCheck.args = {
    checked: true,
    disabled: true,
};

export const CheckboxM = Template.bind({});
CheckboxM.args = {
    checked: true,
    size: CheckboxSize.M,
};

export const CheckboxL = Template.bind({});
CheckboxL.args = {
    checked: true,
    size: CheckboxSize.L,
};
