import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from "@/shared/const";
import MainIcon from "@/shared/assets/icons/sidebar/home.svg";
import AboutIcon from "@/shared/assets/icons/sidebar/about.svg";
import ProfileIcon from "@/shared/assets/icons/sidebar/profile.svg";
import ArticlesIcon from "@/shared/assets/icons/sidebar/article.svg";
import { SidebarItemType } from "../types/item";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        { path: getRouteMain(), text: "Главная", Icon: MainIcon },
        { path: getRouteAbout(), text: "О нас", Icon: AboutIcon },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                text: "Профиль",
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                text: "Статьи",
                Icon: ArticlesIcon,
                authOnly: true,
            }
        );
    }

    return sidebarItemsList;
});
