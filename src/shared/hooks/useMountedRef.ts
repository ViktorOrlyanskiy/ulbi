import { useEffect, useRef } from "react";

/**
 * Определяет монтировался компонент или нет
 * @returns флаг boolean
 */

export function useMountedRef() {
    const mounted = useRef(false);

    useEffect(() => {
        mounted.current = true;

        return () => {
            mounted.current = false;
        };
    });

    return mounted;
}
