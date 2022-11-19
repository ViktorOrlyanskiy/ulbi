import { Map } from "entities/Map";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "shared/ui";

interface MapPageProps {}

const MapPage: FC<MapPageProps> = (props) => {
    const { t } = useTranslation();
    return (
        <Page>
            <div>{t("Карта")}</div>
            <Map />
        </Page>
    );
};
export default MapPage;
