import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator, ThemeDecorator } from "app/config/storybook";
import { Theme } from "app/providers/ThemeProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { EditableProfileCard } from "./EditableProfileCard";

export default {
    title: "features/EditableProfileCard",
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
    <EditableProfileCard {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        profile: {
            form: {
                first: "FirstName",
                lastname: "LastName",
                age: 65,
                city: "Moscow",
                username: "admin",
                country: Country.Russia,
                currency: Currency.EUR,
            },
            readonly: true,
        },
    }),
];

export const LightEdit = Template.bind({});
LightEdit.args = {};
LightEdit.decorators = [
    StoreDecorator({
        profile: {
            form: {
                first: "FirstName",
                lastname: "LastName",
                age: 65,
                city: "Moscow",
                username: "admin",
                country: Country.Russia,
                currency: Currency.EUR,
            },
            readonly: false,
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                first: "FirstName",
                lastname: "LastName",
                age: 65,
                city: "Moscow",
                username: "admin",
                country: Country.Russia,
                currency: Currency.EUR,
            },
            readonly: true,
        },
    }),
];
