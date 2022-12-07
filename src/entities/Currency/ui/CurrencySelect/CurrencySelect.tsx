import { FC, memo, useCallback } from "react";
import { classNames } from "shared/lib";
import { Select } from "shared/ui";
import { Currency } from "../../model/consts/consts";

interface CurrencySelectProps {
    className?: string;
    readonly?: boolean;
    value?: Currency;
    onChange?: (value: Currency) => void;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect: FC<CurrencySelectProps> = memo((props) => {
    const { className, readonly, value, onChange } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange]
    );

    return (
        <Select
            className={classNames("", {}, [className])}
            value={value}
            onChange={onChangeHandler}
            options={options}
            readonly={readonly}
            idScrollElement="scroll-element"
        />
    );
});
