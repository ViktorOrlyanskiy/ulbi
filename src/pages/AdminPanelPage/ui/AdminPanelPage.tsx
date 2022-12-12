import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";

const AdminPanelPage: FC = memo(() => {
    const { t } = useTranslation();

    return <Page>{t("Админпанель")}</Page>;
});
export default AdminPanelPage;
