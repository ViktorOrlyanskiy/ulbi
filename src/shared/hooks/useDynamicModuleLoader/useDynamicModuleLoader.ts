import { Reducer } from "@reduxjs/toolkit";
import {
    StateSchemaKey,
    ReduxStoreWithManager,
} from "app/providers/StoreProvider";
import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

// Асинхронно добавляет и удаляет reducer
export function useDynamicModuleLoader(reducers: ReducersList) {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(
            ([name, reducer]: ReducersListEntry) => {
                store.reducerManager.add(name, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        );

        return () => {
            Object.entries(reducers).forEach(
                ([name, reducer]: ReducersListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                }
            );
        };

        // eslint-disable-next-line
    }, []);
}
