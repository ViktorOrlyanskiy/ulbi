import {
    FC,
    MouseEvent,
    useEffect,
    useState,
    useCallback,
    memo,
    useRef,
} from "react";
import { checkLengthString, classNames } from "shared/lib";
import { Popup } from "shared/ui";
import ChevronIcon from "./chevronDown.svg";
import cls from "./Select.module.scss";

const HEIGHT_EMPTY_BLOCK = 8; // задается в css файле равен padding в .body
const HEIGHT_OPTION = 26; // подбирается

export interface SelectOption {
    value: string;
    content: string;
}

const searchField = (field: string, options: SelectOption[]) => {
    const option = options.find((item) => item.value === field);
    return option?.content;
};

const getMaxHeightPopup = (
    options: SelectOption[],
    heightOption: number,
    heightEmptyBlock: number
) => {
    const PADDING_POPUP = 8; // задается в css файле равен padding в .body

    if (options.length > 4) {
        return heightOption * 4 + heightEmptyBlock;
    }
    return heightOption * options.length + PADDING_POPUP * 2;
};

interface SelectProps {
    options: SelectOption[];
    idScrollElement: string;
    className?: string;
    label?: string;
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select: FC<SelectProps> = memo((props) => {
    const {
        options,
        idScrollElement,
        onChange,
        value,
        label,
        readonly,
        className,
    } = props;
    const headerRef = useRef<HTMLDivElement | null>(null);
    const bodyRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setOpen] = useState(false);
    const [currentContent, setCurrentContent] = useState<string | undefined>(
        label
    );

    const heightPopup = getMaxHeightPopup(
        options,
        HEIGHT_OPTION,
        HEIGHT_EMPTY_BLOCK
    );

    const onToggle = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);

    const onChangeValue = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            const { value } = e.currentTarget.dataset;
            const content = e.currentTarget.innerHTML;
            onChange?.(value || "");
            setCurrentContent(content || "");
            setOpen(false);
        },
        [onChange]
    );

    const renderOptionsList = options?.map((opt) => (
        <div
            key={opt.value}
            data-value={opt.value}
            className={`${cls.option} ${
                currentContent === opt.content ? cls.selected : ""
            }`}
            onClick={onChangeValue}
        >
            {opt.content}
        </div>
    ));

    useEffect(() => {
        if (!label && value) {
            setCurrentContent(searchField(value, options));
        }
    }, [label, value, options]);

    const modsHeader = { [cls.open]: isOpen, [cls.readonly]: readonly };
    const stylesBody = { height: heightPopup - HEIGHT_EMPTY_BLOCK * 2 };

    return (
        <div className={classNames(cls.Select, {}, [className])}>
            <div
                ref={headerRef}
                className={classNames(cls.header, modsHeader, [])}
                onClick={onToggle}
            >
                {currentContent && checkLengthString(currentContent, 25)}
                <ChevronIcon className={cls.icon} />
            </div>
            {isOpen && (
                <Popup
                    triggerRef={headerRef}
                    idScrollElement={idScrollElement}
                    maxHeightPopup={heightPopup}
                    hiddenPopup={onToggle}
                    className={cls.popup}
                >
                    {options.length > 4 ? (
                        <>
                            <div className={cls.emptyBlock} />
                            <div
                                ref={bodyRef}
                                className={cls.body}
                                style={stylesBody}
                            >
                                {renderOptionsList}
                            </div>
                        </>
                    ) : (
                        <div ref={bodyRef} className={cls.body}>
                            {renderOptionsList}
                        </div>
                    )}
                </Popup>
            )}
        </div>
    );
});
