import { FC, ReactNode, useCallback, useRef, useState } from "react";
import { Popup, Position } from "../Popup/Popup";
import cls from "./Dropdown.module.scss";

interface DropdownProps {
    position: Position;
    marginFromTrigger: number;
    maxHeightPopup: number;
    trigger: ReactNode;
    children: ReactNode;
    className?: string;
}

export const Dropdown: FC<DropdownProps> = (props) => {
    const {
        position,
        marginFromTrigger,
        maxHeightPopup,
        trigger,
        children,
        className,
    } = props;

    const triggerRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setOpen] = useState(false);

    const onToggle = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);

    return (
        <>
            <div ref={triggerRef} onClick={onToggle} className={cls.trigger}>
                {trigger}
            </div>
            {isOpen && (
                <Popup
                    triggerRef={triggerRef}
                    marginFromTrigger={marginFromTrigger}
                    maxHeightPopup={maxHeightPopup}
                    hiddenPopup={onToggle}
                    position={position}
                    className={className}
                >
                    {children}
                </Popup>
            )}
        </>
    );
};
