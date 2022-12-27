import React, { MutableRefObject, useCallback, useEffect, useRef } from "react";

/**
 * Закрывает Popup если сделан клик вне элемента ref
 * @param ref - элемент по которому можно кликать
 * @param isOpen - флаг рендера элемента
 * @param setIsOpen - функция изменения флага рендера
 */

export function useOutsideClick(
    ref: React.MutableRefObject<any>,
    isOpen: boolean,
    setIsOpen: (arg1: boolean) => void
) {
    const timerRef = useRef() as MutableRefObject<
        ReturnType<typeof setTimeout>
    >;
    const listener = useCallback(
        (e: MouseEvent | TouchEvent) => {
            const node = ref.current;
            if (!node || node.contains(e.target)) {
                return;
            }

            if (isOpen) {
                setIsOpen(false);
            }
        },
        [ref, setIsOpen, isOpen]
    );

    useEffect(() => {
        if (isOpen) {
            timerRef.current = setTimeout(() => {
                document.addEventListener("click", listener);
            }, 50);
        }

        return () => {
            clearTimeout(timerRef.current);
            document.removeEventListener("click", listener);
        };
    }, [isOpen, listener]);
}
