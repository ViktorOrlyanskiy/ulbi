import React, { FC, useRef, useState, useEffect, useCallback } from "react";
import { classNames } from "shared/lib";
import { Portal } from "shared/ui";
import cls from "./Modal.module.scss";

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen, onClose } = props;
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const timerRefOne = useRef<ReturnType<typeof setTimeout>>();
    const timerRefTwo = useRef<ReturnType<typeof setTimeout>>();

    const mods: Record<string, boolean> = {
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

    return (
        isOpen && (
            <Portal>
                <div className={classNames(cls.Modal, mods, [className])}>
                    <div className={cls.overlay} onClick={onCloseHandler}>
                        <div className={cls.content} onClick={onContentClick}>
                            {children}
                        </div>
                    </div>
                </div>
            </Portal>
        )
    );
};
