import { FC, memo } from "react";
import { classNames } from "shared/lib";
import cls from "./BurgerButton.module.scss";

interface BurgerButtonProps {
    className?: string;
    onClick?: () => void;
}

export const BurgerButton: FC<BurgerButtonProps> = memo((props) => {
    const { className, onClick, ...otherProps } = props;

    return (
        <div
            className={classNames(cls.BurgerButton, {}, [className])}
            onClick={onClick}
            {...otherProps}
        >
            <div className={cls.button}>
                <span className={cls.icon} />
            </div>
        </div>
    );
});
