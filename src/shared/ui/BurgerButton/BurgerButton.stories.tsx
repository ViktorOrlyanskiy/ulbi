import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BurgerButton } from "./BurgerButton";

export default {
    title: "shared/BurgerButton",
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
