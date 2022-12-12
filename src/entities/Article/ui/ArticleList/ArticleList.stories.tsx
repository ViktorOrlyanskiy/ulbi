import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/app/config/storybook";
import { ArticleType, ArticleView } from "../../model/consts/consts";
import { Article } from "../../model/types/article";
import { ArticleList } from "./ArticleList";

export default {
    title: "entities/ArticleList",
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
    <ArticleList {...args} />
);

const articles: Article[] = [
    {
        id: "1",
        title: "Javascript news",
        subtitle: "Что нового в JS за 2022 год?",
        img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
        views: 1022,
        createdAt: "26.02.2022",
        user: {
            id: "1",
            username: "Admin",
            avatar: "",
        },
        type: [ArticleType.IT],
        blocks: [],
    },
    {
        id: "2",
        title: "Javascript news",
        subtitle: "Что нового в JS за 2022 год?",
        img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
        views: 1022,
        createdAt: "26.02.2022",
        user: {
            id: "1",
            username: "Admin",
            avatar: "",
        },
        type: [ArticleType.IT],
        blocks: [],
    },
    {
        id: "3",
        title: "Javascript news",
        subtitle: "Что нового в JS за 2022 год?",
        img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
        views: 1022,
        createdAt: "26.02.2022",
        user: {
            id: "1",
            username: "Admin",
            avatar: "",
        },
        type: [ArticleType.IT],
        blocks: [],
    },
];

export const Grid = Template.bind({});
Grid.args = { articles };
Grid.decorators = [];

export const List = Template.bind({});
List.args = { articles, view: ArticleView.LIST };
List.decorators = [];

export const LoadingGrid = Template.bind({});
LoadingGrid.args = { isLoading: true };
LoadingGrid.decorators = [];

export const LoadingList = Template.bind({});
LoadingList.args = { isLoading: true, view: ArticleView.LIST };
LoadingList.decorators = [];

export const DarkGrid = Template.bind({});
DarkGrid.args = { articles };
DarkGrid.decorators = [ThemeDecorator(Theme.DARK)];
