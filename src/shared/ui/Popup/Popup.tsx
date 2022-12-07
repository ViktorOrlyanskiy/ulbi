import {
    FC,
    MutableRefObject,
    useState,
    useEffect,
    useCallback,
    CSSProperties,
    useLayoutEffect,
    useRef,
    ReactNode,
} from "react";
import { classNames } from "shared/lib";
import { Portal } from "../Portal/Portal";
import styles from "./Popup.module.scss";

export const enum Position {
    TOP_LEFT = "top/left",
    TOP_RIGHT = "top/right",
    TOP_CENTER = "top/center",
    BOTTOM_LEFT = "bottom/left",
    BOTTOM_RIGHT = "bottom/right",
    BOTTOM_CENTER = "bottom/center",
    HIDDEN = "hidden",
}

const getPositionPopup = (
    widthWindow: number,
    heightWindow: number,
    triggerRect: DOMRect,
    marginFromTrigger: number,
    maxHeightPopup: number,
    parentRect?: DOMRect
) => {
    const bottomPopup = triggerRect.bottom + marginFromTrigger + maxHeightPopup;

    if (parentRect) {
        if (triggerRect.top < parentRect.top) {
            return Position.HIDDEN;
        }

        if (triggerRect.bottom > parentRect.bottom) {
            return Position.HIDDEN;
        }
    }

    if (triggerRect.top >= heightWindow) {
        return Position.HIDDEN;
    }

    if (triggerRect.bottom <= 0) {
        return Position.HIDDEN;
    }

    if (bottomPopup >= heightWindow && triggerRect.top < heightWindow) {
        return Position.TOP_LEFT;
    }

    return Position.BOTTOM_LEFT;
};

interface PopupProps {
    triggerRef: MutableRefObject<HTMLElement | null>;
    maxHeightPopup: number;
    hiddenPopup: () => void;
    idScrollElement?: string; // id родительского элемента в котором расположен trigger
    maxWidth?: boolean;
    position?: Position;
    marginFromTrigger?: number;
    className?: string;
    children: ReactNode;
}

export const Popup: FC<PopupProps> = (props) => {
    const {
        triggerRef,
        idScrollElement,
        maxHeightPopup,
        hiddenPopup,
        maxWidth,
        position,
        marginFromTrigger = 4,
        className,
        children,
    } = props;

    const parentElementWithScroll = useRef<HTMLElement | null>(null);
    const bodyRef = useRef<HTMLDivElement | null>(null);
    const timerRef = useRef() as MutableRefObject<
        ReturnType<typeof setTimeout>
    >;

    const [widthPopup, setWidthPopup] = useState<number | undefined>(undefined);
    const [topPopup, setTopPopup] = useState<number | undefined>(undefined);
    const [bottomPopup, setBottomPopup] = useState<number | undefined>(
        undefined
    );
    const [leftPopup, setLeftPopup] = useState<number | undefined>(undefined);
    const [rightPopup, setRightPopup] = useState<number | undefined>(undefined);

    const setRectPopup = useCallback(
        (position?: Position) => {
            if (triggerRef?.current && bodyRef?.current) {
                const fullWidthWindow = window.innerWidth; // включая scrollbar
                const widthWindow = idScrollElement
                    ? fullWidthWindow
                    : document.body.clientWidth;
                const heightWindow = document.body.clientHeight;

                const triggerRect = triggerRef?.current.getBoundingClientRect();
                const parentRect =
                    parentElementWithScroll?.current?.getBoundingClientRect();
                const bodyRect = bodyRef?.current.getBoundingClientRect();

                const positionPopup =
                    position ||
                    getPositionPopup(
                        widthWindow,
                        heightWindow,
                        triggerRect,
                        marginFromTrigger,
                        maxHeightPopup,
                        parentRect
                    );

                switch (positionPopup) {
                    case Position.TOP_LEFT:
                        setTopPopup(undefined);
                        setBottomPopup(
                            heightWindow - triggerRect.top + marginFromTrigger
                        );

                        setLeftPopup(triggerRect.left + 1); // 1 - поправка в расчеты
                        setRightPopup(undefined);
                        break;

                    case Position.TOP_CENTER:
                        setTopPopup(undefined);
                        setBottomPopup(
                            heightWindow - triggerRect.top + marginFromTrigger
                        );
                        // 1 - поправка в расчеты
                        setLeftPopup(
                            triggerRect.left +
                                1 -
                                (bodyRect.width - triggerRect.width) / 2
                        );
                        setRightPopup(undefined);
                        break;

                    case Position.TOP_RIGHT:
                        setTopPopup(undefined);
                        setBottomPopup(
                            heightWindow - triggerRect.top + marginFromTrigger
                        );
                        setLeftPopup(undefined);
                        setRightPopup(widthWindow - triggerRect.right);
                        break;

                    case Position.BOTTOM_LEFT:
                        setTopPopup(triggerRect.bottom + marginFromTrigger);
                        setBottomPopup(undefined);
                        setLeftPopup(triggerRect.left + 1); // 1 - поправка в расчеты
                        setRightPopup(undefined);
                        break;

                    case Position.BOTTOM_CENTER:
                        setTopPopup(triggerRect.bottom + marginFromTrigger);
                        setBottomPopup(undefined);
                        // 1 - поправка в расчеты
                        setLeftPopup(
                            triggerRect.left +
                                1 -
                                (bodyRect.width - triggerRect.width) / 2
                        );
                        setRightPopup(undefined);
                        break;

                    case Position.BOTTOM_RIGHT:
                        setTopPopup(triggerRect.bottom + marginFromTrigger);
                        setBottomPopup(undefined);
                        setLeftPopup(undefined);
                        setRightPopup(widthWindow - triggerRect.right);
                        break;

                    case Position.HIDDEN:
                        hiddenPopup();
                        break;

                    default:
                        hiddenPopup();
                        break;
                }

                if (maxWidth) {
                    setWidthPopup(triggerRect.width);
                }
            }
        },
        [
            maxWidth,
            triggerRef,
            maxHeightPopup,
            marginFromTrigger,
            idScrollElement,
            hiddenPopup,
        ]
    );

    const onClose = useCallback(
        (e: globalThis.MouseEvent) => {
            const childrenElement = e.target as HTMLElement;

            if (bodyRef.current && !bodyRef.current.contains(childrenElement)) {
                hiddenPopup();
            }
        },
        [hiddenPopup]
    );

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                hiddenPopup();
            }
        },
        [hiddenPopup]
    );

    // первая отрисовка компонента
    useLayoutEffect(() => {
        setRectPopup(position);
    }, [setRectPopup, position]);

    // контролирует события мыши и клавиатуры
    useEffect(() => {
        timerRef.current = setTimeout(() => {
            document.addEventListener("click", onClose);
            document.addEventListener("keydown", onKeyDown);
        }, 50);

        return () => {
            clearTimeout(timerRef.current);
            document.removeEventListener("click", onClose);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [onClose, onKeyDown]);

    // контролирует позициорирование
    useEffect(() => {
        if (idScrollElement) {
            parentElementWithScroll.current =
                document.getElementById(idScrollElement);
        } else {
            parentElementWithScroll.current = document.body;
        }

        window.addEventListener("resize", () => setRectPopup());
        parentElementWithScroll.current?.addEventListener("scroll", () =>
            setRectPopup()
        );

        return () => {
            window.removeEventListener("resize", () => setRectPopup());
            parentElementWithScroll.current?.removeEventListener("scroll", () =>
                setRectPopup()
            );
        };
    }, [idScrollElement, setRectPopup]);

    const styleProperties: CSSProperties = {
        position: "absolute",
        zIndex: 100000,
        top: topPopup,
        bottom: bottomPopup,
        left: leftPopup,
        right: rightPopup,
        width: widthPopup,
        height: maxHeightPopup,
    };

    return (
        <Portal>
            <div
                ref={bodyRef}
                style={styleProperties}
                className={classNames(styles.popup, {}, [className])}
            >
                {children}
            </div>
        </Portal>
    );
};
