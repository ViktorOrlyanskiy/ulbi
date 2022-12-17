import { FC, memo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";
import { BugButton } from "@/app/providers/ErrorBoundary";
import { Button, ButtonTheme, Checkbox, Popup, Position } from "@/shared/ui";
import { Counter } from "@/entities/Counter";

const MainPage: FC = memo(() => {
    const { t } = useTranslation("main");
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState("");
    const refTrigger = useRef<HTMLDivElement | null>(null);
    const onClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <Page>
            {t("Главная")}
            <Counter />
            {/* <BugButton /> */}
            {/* <div
                ref={refTrigger}
                style={{ width: 100, border: "1px solid red" }}
            >
                <Button theme={ButtonTheme.OUTLINE} onClick={onClick}>
                    11111
                </Button>
            </div>
            {isOpen && (
                <Popup
                    triggerRef={refTrigger}
                    idScrollElement="scroll-element"
                    position={Position.TOP_CENTER}
                    maxHeightPopup={50}
                    hiddenPopup={onClick}
                >
                    22222
                </Popup>
            )} */}
        </Page>
    );
});
export default MainPage;
