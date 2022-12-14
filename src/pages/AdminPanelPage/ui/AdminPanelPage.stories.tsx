import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator, StoreDecorator } from "@/app/config/storybook";
import { Theme } from "@/app/providers/ThemeProvider";
import AdminPanelPage from "./AdminPanelPage";

export default {
    title: "pages/AdminPanelPage",
    component: AdminPanelPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = () => (
    <AdminPanelPage />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
