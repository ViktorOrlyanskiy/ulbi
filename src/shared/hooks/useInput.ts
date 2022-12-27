import React, { useState } from "react";

/**
 * Обрабатывает ввод данных в управляемый input
 * @param initialValue
 * @returns кортеж [{value, onChange}, resetValue]
 */

export function useInput(initialValue: string) {
    const [value, setValue] = useState<string>(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return [{ value, onChange }, () => setValue(initialValue)];
}
