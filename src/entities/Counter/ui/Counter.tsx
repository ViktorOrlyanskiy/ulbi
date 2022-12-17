import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import { useAppDispatch } from "@/shared/hooks";
import { Button } from "@/shared/ui";
import { counterActions, useCounterActions } from "../model/slice/counterSlice";
import { useCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

interface CounterProps {}

export const Counter: FC<CounterProps> = memo(() => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const counterValue = useCounterValue();
    const { increment, addFive, decrement } = useCounterActions();

    const handleInc = () => {
        increment();
    };

    const handleFive = () => {
        addFive(5);
    };

    const handleDec = () => {
        decrement();
    };
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={handleInc}>
                {t("increment")}
            </Button>
            <Button data-testid="decrement-btn" onClick={handleFive}>
                {t("five")}
            </Button>
            <Button data-testid="decrement-btn" onClick={handleDec}>
                {t("decrement")}
            </Button>
        </div>
    );
});
