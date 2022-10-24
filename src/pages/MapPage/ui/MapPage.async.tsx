import { lazy } from "react";

export const MapPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-expect-error
            setTimeout(() => resolve(import("./MapPage")), 1000);
        })
);
