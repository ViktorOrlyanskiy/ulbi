import {
    FC,
    MouseEvent,
    useEffect,
    useMemo,
    useState,
    useCallback,
    useRef,
} from "react";
import { useOutsideClick } from "shared/hooks";
import { classNames } from "shared/lib";
import { Portal } from "shared/ui";
import ChevronIcon from "./chevronDown.svg";
import cls from "./Select.module.scss";

export interface SelectOption {
    value: string | number;
    content: string;
}

interface NewSelectProps {
    className?: string;
    options: SelectOption[];
    label?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select: FC<NewSelectProps> = (props) => {
    const { className, options, onChange, label, value, readonly } = props;
    const refHeader = useRef<HTMLDivElement | null>(null);
    const refBody = useRef<HTMLDivElement | null>(null);
    const [isOpen, setOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState<string | number>(
        label || ""
    );
    const [topBody, setTopBody] = useState(0);
    const [leftBody, setLeftBody] = useState(0);
    const [widthBody, setWidthBody] = useState(0);

    useOutsideClick(refBody, isOpen, setOpen);

    const searchField = (options: SelectOption[], field: string | number) => {
        const option = options.find((item) => item.value === field);
        return option?.content || "";
    };

    const onToggle = () => {
        if (!readonly) {
            setOpen((prev) => !prev);
        }
    };

    const onChangeValue = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            const { value } = e.currentTarget.dataset;
            const content = e.currentTarget.innerHTML;
            onChange?.(value || "");
            setCurrentValue(content || "");
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

    useEffect(() => {
        if (!label && options?.length && value) {
            setCurrentValue(searchField(options, value));
        }
    }, [label, options, value]);

    useEffect(() => {
        const headerElement = refHeader?.current;

        if (headerElement) {
            const { left, bottom, width } =
                headerElement.getBoundingClientRect();

            setTopBody(bottom + 5);
            setLeftBody(left);
            setWidthBody(width);
        }
    }, [isOpen]);

    return (
        <div className={classNames(cls.Select, {}, [className])}>
            <div
                ref={refHeader}
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

            {isOpen && (
                <Portal>
                    <div
                        ref={refBody}
                        style={{
                            top: topBody,
                            left: leftBody,
                            width: widthBody,
                        }}
                        className={classNames(cls.body, {}, [])}
                    >
                        {optionsList}
                    </div>
                </Portal>
            )}
        </div>
    );
};
