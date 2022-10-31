import {
    FC,
    MouseEvent,
    useEffect,
    useMemo,
    useState,
    useCallback,
} from "react";
import { classNames } from "shared/lib";
import ChevronIcon from "./chevronDown.svg";
import cls from "./Select.module.scss";

export interface SelectOption {
    value: string;
    content: string;
}

interface NewSelectProps {
    className?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select: FC<NewSelectProps> = (props) => {
    const { className, options, onChange, value, readonly } = props;
    const [isOpen, setOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState(value);

    const onToggle = () => {
        if (!readonly) {
            setOpen((prev) => !prev);
        }
    };

    const onChangeValue = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            const { value } = e.currentTarget.dataset;
            setCurrentValue(value || "");
            onChange?.(value || "");
            setOpen(false);
        },
        [onChange]
    );

    const optionsList = useMemo(
        () =>
            options?.map((opt) => (
                <div
                    key={opt.value}
                    data-value={opt.value}
                    className={cls.option}
                    onClick={onChangeValue}
                >
                    {opt.content}
                </div>
            )),
        [options, onChangeValue]
    );

    const onClose = (e: globalThis.MouseEvent) => {
        const { classList } = e.target as HTMLElement;

        if (!classList.contains(cls.option)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("click", onClose);
        }

        return () => document.removeEventListener("click", onClose);
    }, [isOpen]);

    return (
        <div className={classNames(cls.Select, {}, [className])}>
            <div
                className={classNames(
                    cls.header,
                    { [cls.open]: isOpen, [cls.readonly]: readonly },
                    []
                )}
                onClick={onToggle}
            >
                {currentValue}
                <ChevronIcon className={cls.icon} />
            </div>
            <div className={classNames(cls.body, { [cls.open]: isOpen }, [])}>
                {optionsList}
            </div>
        </div>
    );
};
