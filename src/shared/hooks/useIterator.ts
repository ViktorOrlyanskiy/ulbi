import { useCallback, useMemo, useState } from "react";

/**
 * Итерируется по переданному массиву
 * @param items массив элементов для перебора
 * @param initialIndex
 * @returns кортеж [item || items[0], prev, next]
 */

export function useIterator(items = [], initialIndex = 0) {
    const [i, setIndex] = useState(initialIndex);

    const prev = useCallback(() => {
        if (i === 0) {
            setIndex(items.length - 1);
            return;
        }
        setIndex(i - 1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i]);

    const next = useCallback(() => {
        if (i === items.length - 1) {
            setIndex(0);
            return;
        }
        setIndex(i + 1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i]);

    const item = useMemo(
        () => items[i],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [i]
    );

    return [item || items[0], prev, next];
}
