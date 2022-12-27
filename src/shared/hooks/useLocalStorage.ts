import { useState, useEffect } from "react";

/**
 * Получает и сохраняет данные в localStorage
 * @param initialValue
 * @param key
 * @returns кортеж [value, setValue]
 */

export function useLocalStorage(initialValue: any, key: string) {
    const getValue = () => {
        const storage = localStorage.getItem(key); // string | null

        if (storage) {
            return JSON.parse(storage);
        }

        return initialValue;
    };

    const [value, setValue] = useState<any>(getValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}
