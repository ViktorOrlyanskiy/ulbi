import { Story } from "@storybook/react";
import "app/styles/index.scss";
import { CSSProperties } from "react";

export const AdditionalStyleDecorator =
    (styles: CSSProperties) => (StoryComponent: Story) =>
        (
            <div style={styles}>
                <StoryComponent />
            </div>
        );
