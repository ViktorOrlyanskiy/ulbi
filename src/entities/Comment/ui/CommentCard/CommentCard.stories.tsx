import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/app/config/storybook";
import { CommentCard } from "./CommentCard";

export default {
    title: "entities/CommentCard",
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

const comment = {
    id: "1",
    user: {
        id: "1",
        username: "Admin",
    },
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis itaque nisi in. Ad sit earum placeat maiores sunt ratione odit? Pariatur consequuntur, qui neque eius sint aut totam tempore?",
};

export const Primary = Template.bind({});
Primary.args = {
    comment,
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
    comment,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    comment,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
