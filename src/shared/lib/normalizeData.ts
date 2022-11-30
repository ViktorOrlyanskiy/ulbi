/**
 * Функция нормализует переданный массив данных
 * @param data : массив данных
 * @param key : ключ для объекта
 * @returns : кортеж [{key:data}, data]
 */

export const normalizeData = <T>(data: T[], key: string) => {
    const ids: Array<string | number> = [];
    const entities = {} as Record<string, T>;

    data.forEach((item) => {
        // ids.push(item[key]);
        // entities[item[key]] = item;
    });
    return [entities, ids];
};
