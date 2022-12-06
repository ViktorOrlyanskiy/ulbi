import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator, ThemeDecorator } from "app/config/storybook";
import { Theme } from "app/providers/ThemeProvider";
import { Article } from "entities/Article";
import ArticlesPage from "./ArticlesPage";

export default {
    title: "pages/ArticlesPage",
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
    <ArticlesPage {...args} />
);

const article: Article = {
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
    type: [],
    blocks: [],
};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        sortingArticles: { _inited: true },
        articles: {
            ids: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
            entities: {
                "1": { ...article, id: "1" },
                "2": { ...article, id: "2" },
                "3": { ...article, id: "3" },
                "4": { ...article, id: "4" },
                "5": { ...article, id: "5" },
                "6": { ...article, id: "6" },
                "7": { ...article, id: "7" },
                "8": { ...article, id: "8" },
                "9": { ...article, id: "9" },
            },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        sortingArticles: { _inited: true },
        articles: {
            ids: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
            entities: {
                "1": { ...article, id: "1" },
                "2": { ...article, id: "2" },
                "3": { ...article, id: "3" },
                "4": { ...article, id: "4" },
                "5": { ...article, id: "5" },
                "6": { ...article, id: "6" },
                "7": { ...article, id: "7" },
                "8": { ...article, id: "8" },
                "9": { ...article, id: "9" },
            },
        },
    }),
];
