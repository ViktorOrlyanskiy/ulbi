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
    value: string;
    content: string;
}

interface NewSelectProps {
    className?: string;
    options: SelectOption[];
    label?: string;
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select: FC<NewSelectProps> = (props) => {
    const { className, options, onChange, label, value, readonly } = props;
    const refHeader = useRef<HTMLDivElement | null>(null);
    const refBody = useRef<HTMLDivElement | null>(null);
    const [isOpen, setOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState<string>(label || "");
    const [topBody, setTopBody] = useState(0);
    const [leftBody, setLeftBody] = useState(0);
    const [widthBody, setWidthBody] = useState(0);

    useOutsideClick(refBody, isOpen, setOpen);

    const searchField = (options: SelectOption[], field: string) => {
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

    const x = () => {
        console.log(document.documentElement.clientWidth);
    };

    useEffect(() => {
        document.addEventListener("resize", x);
    });

    // определяет координаты
    useEffect(() => {
        const headerElement = refHeader?.current;

        function getCoords(elem: any) {
            const box = elem.getBoundingClientRect();
            return {
                top: box.top + window.pageYOffset,
                right: box.right + window.pageXOffset,
                bottom: box.bottom + window.pageYOffset,
                left: box.left + window.pageXOffset,
                width: box.width,
            };
        }

        if (headerElement) {
            const { left, bottom, width } = getCoords(headerElement);

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
                // <Portal>
                <div
                    ref={refBody}
                    style={{
                        position: "absolute",
                        top: topBody,
                        left: leftBody,
                        width: widthBody,
                    }}
                    className={classNames(cls.body, {}, [])}
                >
                    {optionsList}
                </div>
                // </Portal>
            )}
        </div>
    );
};
