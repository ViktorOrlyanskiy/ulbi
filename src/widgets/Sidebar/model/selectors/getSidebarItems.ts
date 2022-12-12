import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import { RoutePath } from "@/shared/const";
import MainIcon from "@/shared/assets/icons/sidebar/home.svg";
import AboutIcon from "@/shared/assets/icons/sidebar/about.svg";
import ProfileIcon from "@/shared/assets/icons/sidebar/profile.svg";
import ArticlesIcon from "@/shared/assets/icons/sidebar/article.svg";
import MapIcon from "@/shared/assets/icons/sidebar/map.svg";
import { SidebarItemType } from "../types/item";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        { path: RoutePath.main, text: "Главная", Icon: MainIcon },
        { path: RoutePath.about, text: "О нас", Icon: AboutIcon },

        { path: RoutePath.map, text: "Карта", Icon: MapIcon },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: `${RoutePath.profile}${userData.id}`,
                text: "Профиль",
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                text: "Статьи",
                Icon: ArticlesIcon,
                authOnly: true,
            }
        );
    }

    return sidebarItemsList;
});
