import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { BugButton } from "app/providers/ErrorBoundary";
import { Checkbox, Select } from "shared/ui";

const options = [
    { value: "csv", content: "CSV" },
    { value: "xlsx", content: "XLSX" },
];

const MainPage: FC = memo(() => {
    const { t } = useTranslation("main");

    return (
        <div>
            {t("Главная")}
            {/* <BugButton /> */}
            {/* eslint-disable-next-line */}
            <Checkbox label="label" />
            <Select options={options} label="2222" />
        </div>
    );
});
export default MainPage;
