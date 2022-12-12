import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoreDecorator } from "@/app/config/storybook";
import { Article, ArticleView } from "@/entities/Article";
import { FetchArticles } from "./FetchArticles";

export default {
    title: "features/articles/FetchArticles",
    component: FetchArticles,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof FetchArticles>;

const Template: ComponentStory<typeof FetchArticles> = (args) => (
    <FetchArticles {...args} />
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

export const Grid = Template.bind({});
Grid.args = { view: ArticleView.GRID };
Grid.decorators = [
    StoreDecorator({
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

export const List = Template.bind({});
List.args = { view: ArticleView.LIST };
List.decorators = [
    StoreDecorator({
        articles: {
            ids: ["1", "2", "3", "4"],
            entities: {
                "1": { ...article, id: "1" },
                "2": { ...article, id: "2" },
                "3": { ...article, id: "3" },
                "4": { ...article, id: "4" },
            },
        },
    }),
];

export const Error = Template.bind({});
Error.args = { view: ArticleView.LIST };
Error.decorators = [
    StoreDecorator({
        articles: {
            ids: ["1", "2", "3", "4"],
            entities: {
                "1": { ...article, id: "1" },
                "2": { ...article, id: "2" },
                "3": { ...article, id: "3" },
                "4": { ...article, id: "4" },
            },
            error: "error",
        },
    }),
];
