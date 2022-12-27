import { useEffect } from "react";

/**
 * Выполняет callback только при первой отрисовке компонента
 * @param callback
 */
export function useInitialEffect(callback: () => void) {
    useEffect(() => {
        if (__PROJECT__ !== "storybook" && __PROJECT__ !== "jest") {
            callback();
        }
        // eslint-disable-next-line
    }, []);
}
