import { ChangeEvent, memo, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Select.module.scss";

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const { className, options, onChange, value, readonly } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const optionsList = useMemo(
        () =>
            options?.map((opt) => (
                <option
                    className={cls.option}
                    value={opt.value}
                    key={opt.value}
                >
                    {opt.content}
                </option>
            )),
        [options]
    );

    return (
        <div className={classNames("", {}, [className])}>
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
});
