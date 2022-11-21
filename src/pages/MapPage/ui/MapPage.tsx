import { Map } from "entities/Map";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page";

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
