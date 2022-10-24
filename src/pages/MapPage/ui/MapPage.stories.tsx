import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "app/config/storybook";
import MapPage from "./MapPage";

export default {
    title: "pages/MapPage",
    component: MapPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof MapPage>;

const Template: ComponentStory<typeof MapPage> = () => <MapPage />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
