import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook";
import { Theme } from "@/app/providers/ThemeProvider";
import { CommentList } from "./CommentList";

export default {
    title: "entities/CommentList",
    component: CommentList,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

const comments = [
    {
        id: "1",
        user: {
            id: "1",
            username: "Admin",
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis itaque nisi in. Ad sit earum placeat maiores sunt ratione odit? Pariatur consequuntur, qui neque eius sint aut totam tempore?",
    },
    {
        id: "2",
        user: {
            id: "1",
            username: "Admin",
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis itaque nisi in. Ad sit earum placeat maiores sunt ratione odit? Pariatur consequuntur, qui neque eius sint aut totam tempore?",
    },
    {
        id: "3",
        user: {
            id: "1",
            username: "Admin",
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis itaque nisi in. Ad sit earum placeat maiores sunt ratione odit? Pariatur consequuntur, qui neque eius sint aut totam tempore?",
    },
];

export const Primary = Template.bind({});
Primary.args = {
    comments,
};
Primary.decorators = [];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
    comments,
    error: "error",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = { comments };
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
