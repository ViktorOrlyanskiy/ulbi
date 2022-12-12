import {
    FC,
    memo,
    useRef,
    InputHTMLAttributes,
    ChangeEventHandler,
} from "react";
import { classNames } from "@/shared/lib";
import cls from "./Checkbox.module.scss";

export enum CheckboxSize {
    M = "size_m",
    L = "size_l",
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

interface CheckboxProps extends HTMLInputProps {
    label?: string;
    className?: string;
    size?: CheckboxSize;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox: FC<CheckboxProps> = memo((props) => {
    const {
        label,
        className,
        size = CheckboxSize.M,
        onChange,
        ...otherProps
    } = props;

    return (
        <label className={classNames(cls.label, {}, [className, cls[size]])}>
            {label}
            <input
                type="checkbox"
                onChange={onChange}
                className={cls.defaultCheckbox}
                {...otherProps}
            />
            <span className={cls.customCheckbox} />
        </label>
    );
});
