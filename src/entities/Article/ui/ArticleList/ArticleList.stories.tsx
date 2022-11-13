import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "app/config/storybook";
import {
    Article,
    ArticleBlockType,
    ArticleType,
    ArticleView,
} from "../../model/types/article";
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
        blocks: [
            {
                id: "1",
                type: ArticleBlockType.TEXT,
                title: "Заголовок этого блока",
                paragraphs: [
                    "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые",
                ],
            },
        ],
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
        blocks: [
            {
                id: "1",
                type: ArticleBlockType.TEXT,
                title: "Заголовок этого блока",
                paragraphs: [
                    "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые",
                ],
            },
        ],
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
        blocks: [
            {
                id: "1",
                type: ArticleBlockType.TEXT,
                title: "Заголовок этого блока",
                paragraphs: [
                    "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые",
                ],
            },
        ],
    },
];

export const LightTile = Template.bind({});
LightTile.args = { articles };
LightTile.decorators = [];

export const LightList = Template.bind({});
LightList.args = { articles, view: ArticleView.LIST };
LightList.decorators = [];

export const LoadingTile = Template.bind({});
LoadingTile.args = { articles, isLoading: true };
LoadingTile.decorators = [];

export const LoadingList = Template.bind({});
LoadingList.args = { articles, isLoading: true, view: ArticleView.LIST };
LoadingList.decorators = [];

export const DarkTile = Template.bind({});
DarkTile.args = { articles };
DarkTile.decorators = [ThemeDecorator(Theme.DARK)];
