import { useCallback, useEffect } from "react";

export function useKeyDown(key: string, handler: () => void) {
    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === key) {
                handler();
            }
        },
        [key, handler]
    );

    useEffect(() => {
        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.addEventListener("keydown", onKeyDown);
        };
    }, [onKeyDown]);
}
