import {
    FC,
    memo,
    TextareaHTMLAttributes,
    useEffect,
    useRef,
    useState,
} from "react";
import { classNames, overflow } from "shared/lib";
import cls from "./Textarea.module.scss";

export enum TextareaTheme {
    OUTLINE = "outline",
    OUTLINE_INVERTED = "outlineInverted",
}

export enum TextareaSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

type HTMLTextareaProps = Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "onChange" | "readOnly"
>;

interface TextareaProps extends HTMLTextareaProps {
    className?: string;
    rows?: number;
    theme?: TextareaTheme;
    size?: TextareaSize;
    readonly?: boolean;
    value?: string;
    onChange?: (value: string) => void;
}

export const Textarea: FC<TextareaProps> = memo((props) => {
    const {
        className,
        rows = 1,
        theme = TextareaTheme.OUTLINE,
        size = TextareaSize.M,
        readonly,
        value,
        onChange,
        ...otherProps
    } = props;

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [currentRows, setCurrentRows] = useState(rows);
    const [lineLength, setLineLength] = useState(0);

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);

        // возвращает к исходной высоте если текст помещается в одну строку
        if (e.target.value?.length < lineLength) {
            setCurrentRows(rows);
        }
    };

    useEffect(() => {
        if (textareaRef.current) {
            // увеличивает высоту
            if (overflow(textareaRef.current)) {
                setCurrentRows((prev) => prev + 1);
                if (value && lineLength === 0) {
                    setLineLength(value.length);
                }
            }
        }
    }, [lineLength, value]);

    return (
        <textarea
            ref={textareaRef}
            rows={currentRows}
            readOnly={readonly}
            value={value}
            onChange={onChangeHandler}
            className={classNames(cls.Textarea, { [cls.readonly]: readonly }, [
                className,
                cls[theme],
                cls[size],
            ])}
            {...otherProps}
        />
    );
});
