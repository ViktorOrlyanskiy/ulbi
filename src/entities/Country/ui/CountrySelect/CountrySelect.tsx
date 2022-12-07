import { FC, memo, useCallback } from "react";
import { classNames } from "shared/lib";
import { Select } from "shared/ui";
import { Country } from "../../model/consts/consts";

interface CountrySelectProps {
    className?: string;
    readonly?: boolean;
    value?: Country;
    onChange?: (value: Country) => void;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect: FC<CountrySelectProps> = memo((props) => {
    const { className, readonly, value, onChange } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
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
