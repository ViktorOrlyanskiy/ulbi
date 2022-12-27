import { useCallback, useMemo, useState } from "react";

interface UseHoveBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type useHoverResult = [boolean, UseHoveBind];

/**
 * Обрабатывает наведение курсора на элемент
 * @returns кортеж [isHover, onMouseEnter, onMouseLeave]
 */

export function useHover(): useHoverResult {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    return useMemo(
        () => [isHover, { onMouseEnter, onMouseLeave }],
        [isHover, onMouseEnter, onMouseLeave]
    );
}
