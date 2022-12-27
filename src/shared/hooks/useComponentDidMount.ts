import { useEffect, useRef } from "react";

/**
 * Возвращает true если элемент монтировался
 * @returns флаг boolean
 */
export function useComponentDidMount() {
    const ref = useRef<boolean | null>();

    useEffect(() => {
        ref.current = true;
    }, []);

    return ref.current;
}
