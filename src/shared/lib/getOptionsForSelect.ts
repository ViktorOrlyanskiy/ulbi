interface SelectOption {
    value: string;
    content: string;
}

type GetOptionsForSelect = <T>(
    array: Array<T>,
    valueKey?: string,
    contentKey?: string
) => SelectOption[];

/**
 * Функция возвращает готовый массив для использования в качестве пропса options в компоненте Select
 * @param array : массив объектов или строк
 * @param valueKey : ключ объекта из переданного массива для создания значения SelectOption.value
 * @param contentKey : ключ объекта из переданного массива для создания значения SelectOption.content
 * @returns : массив SelectOption
 */

export const getOptionsForSelect: GetOptionsForSelect = (
    array,
    valueKey,
    contentKey
) => {
    const options: SelectOption[] = [];
    if (array.length) {
        if (valueKey && contentKey) {
            array.forEach((item) => {
                const option = {} as SelectOption;
                // option.value = String(item[valueKey]) ?? '';
                // option.content = String(item[contentKey]) ?? '';
                options.push(option);
            });
            return options;
        }

        array.forEach((item) => {
            const option = {} as SelectOption;
            option.value = String(item);
            option.content = String(item);
            options.push(option);
        });
        return options;
    }

    return options;
};
