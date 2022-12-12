import React, {
    FC,
    ReactNode,
    useRef,
    useState,
    useEffect,
    useCallback,
    MutableRefObject,
} from "react";
import { classNames } from "@/shared/lib";
import { Portal } from "../Portal/Portal";
import cls from "./Modal.module.scss";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen, onClose } = props;
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const timerRefOne = useRef() as MutableRefObject<
        ReturnType<typeof setTimeout>
    >;
    const timerRefTwo = useRef() as MutableRefObject<
        ReturnType<typeof setTimeout>
    >;

    const mods = {
        [cls.opened]: isMounted,
        [cls.isClosing]: isClosing,
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onCloseHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRefOne.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onCloseHandler();
            }
        },
        [onCloseHandler]
    );

    useEffect(() => {
        if (isOpen && !isMounted) {
            setIsMounted(true);
        }
        if (!isOpen && isMounted) {
            timerRefTwo.current = setTimeout(() => {
                setIsMounted(false);
            }, ANIMATION_DELAY);
        }
    }, [isOpen, isMounted]);

    useEffect(() => {
        if (isMounted) {
            window.addEventListener("keydown", onKeyDown);
        }

        return () => {
            clearTimeout(timerRefOne.current);
            clearTimeout(timerRefTwo.current);
            window.addEventListener("keydown", onKeyDown);
        };
    }, [isMounted, onKeyDown]);

    return isOpen ? (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={onCloseHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    ) : null;
};
