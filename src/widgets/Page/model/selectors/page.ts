import { StateSchema } from "app/providers/StoreProvider";

export const getPageScroll = (state: StateSchema) => state.page.scroll;

export const getPageScrollByPath = (state: StateSchema, path: string) =>
    state.page.scroll[path] || 0;
