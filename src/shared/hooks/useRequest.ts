import { useEffect, useState } from "react";

/**
 * Обрабатывает состояния отправки запроса на сервер
 * @param request запрос на сервер
 * @returns кортеж [data, loading, error]
 */
export function useRequest(request: any) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>("");

    useEffect(() => {
        setLoading(true);
        request()
            .then((response: any) => {
                setData(response.data);
            })
            .catch((error: any) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [request]);

    return [data, loading, error];
}
