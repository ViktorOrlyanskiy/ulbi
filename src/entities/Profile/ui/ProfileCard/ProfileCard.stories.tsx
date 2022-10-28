import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator, ThemeDecorator } from "app/config/storybook";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileCard } from "./ProfileCard";

export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: "FirstName",
        lastname: "LastName",
        age: 65,
        city: "Moscow",
        username: "admin",
        country: Country.Russia,
        currency: Currency.EUR,
    },
    readonly: true,
};

export const EditProfile = Template.bind({});
EditProfile.args = {
    data: {
        first: "FirstName",
        lastname: "LastName",
        age: 65,
        city: "Moscow",
        username: "admin",
        country: Country.Russia,
        currency: Currency.EUR,
    },
};

export const Error = Template.bind({});
Error.args = {
    error: "Error",
};

export const Loadind = Template.bind({});
Loadind.args = {
    isLoading: true,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    data: {
        first: "FirstName",
        lastname: "LastName",
        age: 65,
        city: "Moscow",
        username: "admin",
        country: Country.Russia,
        currency: Currency.EUR,
    },
    readonly: true,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
