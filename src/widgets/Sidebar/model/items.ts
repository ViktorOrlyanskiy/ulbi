import React from "react";
import { RoutePath } from "shared/const";
import MainIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import MapIcon from "shared/assets/icons/map.svg";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    { path: RoutePath.main, text: "Главная", Icon: MainIcon },
    { path: RoutePath.about, text: "О нас", Icon: AboutIcon },
    { path: RoutePath.profile, text: "Профиль", Icon: ProfileIcon },
    { path: RoutePath.map, text: "Карта", Icon: MapIcon },
];