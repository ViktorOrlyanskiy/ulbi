import { FC, memo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page";
import { BugButton } from "app/providers/ErrorBoundary";
import { Button, ButtonTheme, Checkbox, Popup, Select } from "shared/ui";

const MainPage: FC = memo(() => {
    const { t } = useTranslation("main");
    const [isOpen, setIsOpen] = useState(false);
    const refTrigger = useRef<HTMLDivElement | null>(null);
    const onClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <Page>
            {t("Главная")}
            <BugButton />
            {/* <div ref={refTrigger}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onClick}>
                    TRIGGER
                </Button>
            </div>
            {isOpen && (
                <Popup
                    triggerRef={refTrigger}
                    idScrollElement="scroll-element"
                    maxHeightPopup={300}
                    hiddenPopup={() => console.log(1)}
                >
                    fkkfkfkfk
                </Popup>
            )} */}
        </Page>
    );
});
export default MainPage;
