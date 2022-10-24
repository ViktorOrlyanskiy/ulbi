import { FC } from "react";
import { classNames } from "shared/lib";
import { YMaps, Map as Maps, Placemark, GeoObject } from "react-yandex-maps";
import cls from "./Map.module.scss";

interface MapProps {
    className?: string;
}

export const Map: FC<MapProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.Map, {}, [className])}>
            <YMaps version="2.1" apikey="b3c58a3f-8e9b-4b22-bff5-49131de7781d">
                <Maps
                    width="100%"
                    height="100%"
                    defaultState={{
                        center: [59.886123571058036, 30.318729089845945],
                        zoom: 15,
                    }}
                >
                    <GeoObject
                        options={{
                            // iconLayout: "defaultImage",
                            // iconImageHref:
                            //     "https://cdn-icons-png.flaticon.com/512/484/484167.png",
                            // iconImageSize: [20, 20],
                            // iconImageOffset: [0, 0],
                            preset: "islands#redCircleDotIcon",
                            draggable: false,
                        }}
                        properties={{
                            iconContent: "Right Line",
                        }}
                        geometry={{
                            type: "Point",
                            coordinates: [
                                59.886123571058036, 30.318729089845945,
                            ],
                        }}
                    />
                </Maps>
            </YMaps>
        </div>
    );
};
