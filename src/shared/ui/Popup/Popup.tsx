import {
    FC,
    MutableRefObject,
    useState,
    useEffect,
    useCallback,
    CSSProperties,
} from "react";
import { Portal } from "shared/ui";

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
    rectTrigger: DOMRect,
    marginFromTrigger: number,
    maxHeightPopup: number
) => {
    const bottomPopup = rectTrigger.bottom + marginFromTrigger + maxHeightPopup;

    if (bottomPopup >= heightWindow && rectTrigger.top < heightWindow) {
        return Position.TOP_LEFT;
    }

    if (rectTrigger.top >= heightWindow) {
        return Position.HIDDEN;
    }
    if (rectTrigger.bottom <= 0) {
        return Position.HIDDEN;
    }
    return Position.BOTTOM_LEFT;
};

interface PopupProps {
    refTrigger: MutableRefObject<HTMLDivElement | null>;
    idScrollElement: string; // id родительского элемента в котором расположен trigger
    maxHeightPopup: number;
    hiddenPopup: () => void;
    marginFromTrigger?: number;
}

export const Popup: FC<PopupProps> = (props) => {
    const {
        refTrigger,
        idScrollElement,
        maxHeightPopup,
        hiddenPopup,
        marginFromTrigger = 4,
        children,
    } = props;

    const [widthPopup, setWidthPopup] = useState<number | undefined>(0);
    const [heightPopup, setHeightPopup] = useState(maxHeightPopup);
    const [topPopup, setTopPopup] = useState<number | undefined>(0);
    const [bottomPopup, setBottomPopup] = useState<number | undefined>(0);
    const [leftPopup, setLeftPopup] = useState<number | undefined>(0);

    const setRectPopup = useCallback(() => {
        if (refTrigger?.current) {
            const widthWindow = document.body.clientWidth;
            const heightWindow = document.body.clientHeight;
            const rectTrigger = refTrigger?.current.getBoundingClientRect();

            const positionPopup = getPositionPopup(
                widthWindow,
                heightWindow,
                rectTrigger,
                marginFromTrigger,
                maxHeightPopup
            );

            if (positionPopup === Position.BOTTOM_LEFT) {
                setTopPopup(rectTrigger.bottom + marginFromTrigger);
                setBottomPopup(undefined);
                setLeftPopup(rectTrigger.left);
                setWidthPopup(rectTrigger.width);
            }
            if (positionPopup === Position.TOP_LEFT) {
                setTopPopup(undefined);
                setBottomPopup(
                    heightWindow - rectTrigger.top + marginFromTrigger
                );
                setLeftPopup(rectTrigger.left);
                setWidthPopup(rectTrigger.width);
            }
            if (positionPopup === Position.HIDDEN) {
                hiddenPopup();
            }
        }
    }, [refTrigger, maxHeightPopup, marginFromTrigger, hiddenPopup]);

    useEffect(() => {
        setRectPopup();
    }, [setRectPopup]);

    useEffect(() => {
        const parentElementWithScroll =
            document.getElementById(idScrollElement);

        window.addEventListener("resize", setRectPopup);
        parentElementWithScroll?.addEventListener("scroll", setRectPopup);

        return () => {
            window.removeEventListener("resize", setRectPopup);
            parentElementWithScroll?.removeEventListener(
                "scroll",
                setRectPopup
            );
        };
    }, [setRectPopup, idScrollElement]);

    const styles: CSSProperties = {
        position: "absolute",
        zIndex: 100000,
        top: topPopup,
        bottom: bottomPopup,
        left: leftPopup,
        width: widthPopup,
        height: heightPopup,
        background: "green",
    };

    return (
        <Portal>
            <div style={styles}>{children}</div>
        </Portal>
    );
};
