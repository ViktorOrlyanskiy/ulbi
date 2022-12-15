## Storybook

Storybook в проекте используется для двух задач:
1) В качестве витрины компонентов
2) Скриншотного тестирования в паре с локи

Запросы на сервер мокаются с помощью `storybook-addon-mock`.
Для удобной работы написаны вспомогательные декораторы:
1) StyleDecorator 
2) ThemeDecorator 
3) RouterDecorator 
4) StoreDecorator 
5) SuspenseDecorator 
6) AdditionalStyleDecorator

Пример файла:

```typescript jsx
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator, ThemeDecorator } from "@/app/config/storybook";
import LoginForm from "./LoginForm";

export default {
    title: "features/LoginForm",
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        loginForm: { username: "username", password: "password" },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: { username: "username", password: "password" },
    }),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
    StoreDecorator({
        loginForm: {
            username: "username",
            password: "password",
            error: "Вы ввели неверный логин или пароль",
        },
    }),
];
```