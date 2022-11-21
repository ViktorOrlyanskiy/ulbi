import { FC, memo, TextareaHTMLAttributes } from "react";
import { classNames } from "shared/lib";
import cls from "./Textarea.module.scss";

type HTMLTextareaProps = Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "onChange" | "readOnly"
>;

interface TextareaProps extends HTMLTextareaProps {
    className?: string;
    value?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
}
export const Textarea: FC<TextareaProps> = memo((props) => {
    const { className, readonly, value, onChange, ...otherProps } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <textarea
            readOnly={readonly}
            value={value}
            onChange={onChangeHandler}
            className={classNames(cls.Textarea, {}, [className])}
            {...otherProps}
        />
    );
});
