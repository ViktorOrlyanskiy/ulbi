import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@/shared/hooks";
import { Button } from "@/shared/ui";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

interface CounterProps {}

export const Counter: FC<CounterProps> = memo(() => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    //
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={increment}>
                {t("increment")}
            </Button>
            <Button data-testid="decrement-btn" onClick={decrement}>
                {t("decrement")}
            </Button>
        </div>
    );
});
