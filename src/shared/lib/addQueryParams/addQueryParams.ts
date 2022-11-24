export function getQueryParams(params: Record<string, unknown>) {
    const searchParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, String(value));
        }
    });

    return `?${searchParams.toString()}`;
}

/*
 * Функция добавления параметров строки запроса в URL
 */

export function addQueryParams(params: Record<string, unknown>) {
    window.history.pushState(null, "", getQueryParams(params));
}
