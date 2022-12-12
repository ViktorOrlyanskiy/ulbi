import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator, ThemeDecorator } from "@/app/config/storybook";
import ArticleComments from "./ArticleComments";

export default {
    title: "widgets/ArticleComments",
    component: ArticleComments,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticleComments>;

const Template: ComponentStory<typeof ArticleComments> = (args) => (
    <ArticleComments {...args} />
);

const articleComments = {
    ids: ["1", "2", "3"],
    entities: {
        "1": {
            id: "1",
            user: {
                id: "1",
                username: "Admin",
            },
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis itaque nisi in. Ad sit earum placeat maiores sunt ratione odit? Pariatur consequuntur, qui neque eius sint aut totam tempore?",
        },
        "2": {
            id: "2",
            user: {
                id: "1",
                username: "Admin",
            },
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis itaque nisi in. Ad sit earum placeat maiores sunt ratione odit? Pariatur consequuntur, qui neque eius sint aut totam tempore?",
        },
        "3": {
            id: "3",
            user: {
                id: "1",
                username: "Admin",
            },
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis itaque nisi in. Ad sit earum placeat maiores sunt ratione odit? Pariatur consequuntur, qui neque eius sint aut totam tempore?",
        },
    },
};

export const Light = Template.bind({});
Light.args = { id: "1" };
Light.decorators = [
    StoreDecorator({
        articleComments,
    }),
];

export const Loading = Template.bind({});
Loading.args = { id: "1" };
Loading.decorators = [
    StoreDecorator({
        articleComments: {
            ...articleComments,
            isLoading: true,
        },
    }),
];

export const Error = Template.bind({});
Error.args = { id: "1" };
Error.decorators = [
    StoreDecorator({
        articleComments: {
            ...articleComments,
            error: "error",
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = { id: "1" };
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        articleComments,
    }),
];
