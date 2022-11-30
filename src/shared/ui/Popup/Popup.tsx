import {
    FC,
    MutableRefObject,
    useState,
    useEffect,
    useCallback,
    CSSProperties,
    useLayoutEffect,
    useRef,
} from "react";
import { classNames } from "shared/lib";
import { Portal } from "shared/ui";
import styles from "./Popup.module.scss";

enum Position {
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
    idScrollElement: string; // id родительского элемента в котором расположен trigger
    maxHeightPopup: number;
    hiddenPopup: () => void;
    marginFromTrigger?: number;
    className?: string;
}

export const Popup: FC<PopupProps> = (props) => {
    const {
        triggerRef,
        idScrollElement,
        maxHeightPopup,
        hiddenPopup,
        marginFromTrigger = 4,
        className,
        children,
    } = props;

    const parentElementWithScroll = useRef<HTMLElement | null>(null);
    const bodyRef = useRef<HTMLDivElement | null>(null);

    const [widthPopup, setWidthPopup] = useState<number | undefined>(0);
    const [topPopup, setTopPopup] = useState<number | undefined>(0);
    const [bottomPopup, setBottomPopup] = useState<number | undefined>(0);
    const [leftPopup, setLeftPopup] = useState<number | undefined>(0);

    const setRectPopup = useCallback(() => {
        if (triggerRef?.current) {
            const widthWindow = document.body.clientWidth;
            const heightWindow = document.body.clientHeight;
            const triggerRect = triggerRef?.current.getBoundingClientRect();

            const parentRect =
                parentElementWithScroll?.current?.getBoundingClientRect();

            const positionPopup = getPositionPopup(
                widthWindow,
                heightWindow,
                triggerRect,
                marginFromTrigger,
                maxHeightPopup,
                parentRect
            );

            if (positionPopup === Position.BOTTOM_LEFT) {
                setTopPopup(triggerRect.bottom + marginFromTrigger);
                setBottomPopup(undefined);
                setLeftPopup(triggerRect.left);
                setWidthPopup(triggerRect.width);
            }
            if (positionPopup === Position.TOP_LEFT) {
                setTopPopup(undefined);
                setBottomPopup(
                    heightWindow - triggerRect.top + marginFromTrigger
                );
                setLeftPopup(triggerRect.left);
                setWidthPopup(triggerRect.width);
            }
            if (positionPopup === Position.HIDDEN) {
                hiddenPopup();
            }
        }
    }, [triggerRef, maxHeightPopup, marginFromTrigger, hiddenPopup]);

    const onClose = useCallback((e: globalThis.MouseEvent) => {
        const childrenElement = e.target as HTMLElement;

        if (bodyRef.current && !bodyRef.current.contains(childrenElement)) {
            // hiddenPopup();
        }
    }, []);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                hiddenPopup();
            }
        },
        [hiddenPopup]
    );

    useLayoutEffect(() => {
        setRectPopup();
    }, [setRectPopup]);

    useEffect(() => {
        if (idScrollElement) {
            parentElementWithScroll.current =
                document.getElementById(idScrollElement);
        } else {
            parentElementWithScroll.current = document.body;
        }

        document.addEventListener("click", onClose);
        document.addEventListener("keydown", onKeyDown);
        window.addEventListener("resize", setRectPopup);
        parentElementWithScroll.current?.addEventListener(
            "scroll",
            setRectPopup
        );

        return () => {
            document.removeEventListener("click", onClose);
            document.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("resize", setRectPopup);
            parentElementWithScroll.current?.removeEventListener(
                "scroll",
                setRectPopup
            );
        };
    }, [idScrollElement, setRectPopup, onClose, onKeyDown]);

    const styleProperties: CSSProperties = {
        position: "absolute",
        zIndex: 100000,
        top: topPopup,
        bottom: bottomPopup,
        left: leftPopup,
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
