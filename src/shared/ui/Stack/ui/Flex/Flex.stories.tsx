/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Flex } from "./Flex";

export default {
    title: "shared/Flex",
    component: Flex,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>element 1</div>
            <div>element 2</div>
            <div>element 3</div>
            <div>element 4</div>
        </>
    ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    gap: "4",
    children: (
        <>
            <div>element 1</div>
            <div>element 2</div>
            <div>element 3</div>
            <div>element 4</div>
        </>
    ),
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    gap: "8",
    children: (
        <>
            <div>element 1</div>
            <div>element 2</div>
            <div>element 3</div>
            <div>element 4</div>
        </>
    ),
};

export const RowGap12 = Template.bind({});
RowGap12.args = {
    gap: "12",
    children: (
        <>
            <div>element 1</div>
            <div>element 2</div>
            <div>element 3</div>
            <div>element 4</div>
        </>
    ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
    gap: "16",
    children: (
        <>
            <div>element 1</div>
            <div>element 2</div>
            <div>element 3</div>
            <div>element 4</div>
        </>
    ),
};

export const RowGap24 = Template.bind({});
RowGap24.args = {
    gap: "24",
    children: (
        <>
            <div>element 1</div>
            <div>element 2</div>
            <div>element 3</div>
            <div>element 4</div>
        </>
    ),
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    gap: "32",
    children: (
        <>
            <div>element 1</div>
            <div>element 2</div>
            <div>element 3</div>
            <div>element 4</div>
        </>
    ),
};

export const RowGap40 = Template.bind({});
RowGap40.args = {
    gap: "40",
    children: (
        <>
            <div>element 1</div>
            <div>element 2</div>
            <div>element 3</div>
            <div>element 4</div>
        </>
    ),
};

export const Column = Template.bind({});
Column.args = {
    direction: "column",
    children: (
        <>
            <div>element 1</div>
            <div>element 2</div>
            <div>element 3</div>
            <div>element 4</div>
        </>
    ),
};
