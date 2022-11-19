import { FC, memo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BugButton } from "app/providers/ErrorBoundary";
import { Checkbox, Page, Popup, Select } from "shared/ui";

const options = [
    { value: "csv", content: "CSV" },
    { value: "xlsx", content: "XLSX" },
];

const MainPage: FC = memo(() => {
    const { t } = useTranslation("main");
    const [isOpen, setIsOpen] = useState(false);
    const refTrigger = useRef<HTMLDivElement | null>(null);
    const onClick = () => {
        setIsOpen((prev: boolean) => !prev);
    };

    return (
        <Page>
            {t("Главная")}
            {/* <BugButton /> */}
            {/* <Select options={options} label="2222" /> */}

            <div
                ref={refTrigger}
                style={{ width: 100, height: 30, background: "red" }}
                onClick={onClick}
            />
            {isOpen && (
                <Popup
                    refTrigger={refTrigger}
                    idScrollElement="scroll-element"
                    maxHeightPopup={50}
                    hiddenPopup={onClick}
                >
                    11111111
                </Popup>
            )}
        </Page>
    );
});
export default MainPage;
