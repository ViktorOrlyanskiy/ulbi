import { Map } from "entities/Map";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface MapPageProps {}

const MapPage: FC<MapPageProps> = (props) => {
    const { t } = useTranslation();
    return (
        <div>
            <div>{t("Карта")}</div>
            <Map />
        </div>
    );
};
export default MapPage;
