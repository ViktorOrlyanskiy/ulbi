import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoreDecorator } from "app/config/storybook";
import { Article } from "entities/Article";
import { FetchRecommendedArticles } from "./FetchRecommendedArticles";

export default {
    title: "features/articles/FetchRecommendedArticles",
    component: FetchRecommendedArticles,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof FetchRecommendedArticles>;

const Template: ComponentStory<typeof FetchRecommendedArticles> = (args) => (
    <FetchRecommendedArticles {...args} />
);

const article: Article = {
    id: "1",
    img: "",
    createdAt: "",
    views: 123,
    user: { id: "1", username: "123" },
    blocks: [],
    type: [],
    title: "123",
    subtitle: "123",
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
Primary.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3`,
            method: "GET",
            status: 200,
            response: [
                { ...article, id: "1" },
                { ...article, id: "2" },
                { ...article, id: "3" },
            ],
        },
    ],
};
