import { useEffect } from "react";
import { useStore } from "react-redux";
import { Reducer } from "@reduxjs/toolkit";
import {
    StateSchemaKey,
    ReduxStoreWithManager,
} from "app/providers/StoreProvider";
import { useAppDispatch } from "./useAppDispatch";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

// Асинхронно добавляет и удаляет reducer
export function useDynamicModuleLoader(reducers: ReducersList) {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            Object.entries(reducers).forEach(([name, reducer]) => {
                store.reducerManager.remove(name as StateSchemaKey);
                dispatch({ type: `@DESTROY ${name} reducer` });
            });
        };

        // eslint-disable-next-line
    }, []);
}
