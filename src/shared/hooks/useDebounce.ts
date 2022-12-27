import { MutableRefObject, useCallback, useRef } from "react";

/**
 * Реализует работу setTimeout
 * @param callback
 * @param delay
 * @returns
 */

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
    const timer = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    return useCallback(
        (...args: any[]) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }

            timer.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay]
    );
}
