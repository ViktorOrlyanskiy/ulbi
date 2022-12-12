import { useEffect } from "react";
import { useStore } from "react-redux";
import { Reducer } from "@reduxjs/toolkit";
import {
    StateSchemaKey,
    ReduxStoreWithManager,
    StateSchema,
} from "@/app/providers/StoreProvider";
import { useAppDispatch } from "./useAppDispatch";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

// Асинхронно добавляет и удаляет reducer
export function useDynamicModuleLoader(
    reducers: ReducersList,
    removeAfterUnmount: boolean = true
) {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();
    const mountedReducers = store.reducerManager.getReducerMap();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey];

            // Добавляем новый редюсер только если его нет
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };

        // eslint-disable-next-line
    }, []);
}
