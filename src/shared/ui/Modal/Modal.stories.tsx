import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/app/config/storybook";
import { Modal } from "./Modal";

export default {
    title: "shared/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor laudantium optio deserunt, nisi accusamus animi nulla laborum. Recusandae voluptatum, necessitatibus velit id reprehenderit excepturi soluta. Similique quos eum dicta repellat!",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    isOpen: true,
    children:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor laudantium optio deserunt, nisi accusamus animi nulla laborum. Recusandae voluptatum, necessitatibus velit id reprehenderit excepturi soluta. Similique quos eum dicta repellat!",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
