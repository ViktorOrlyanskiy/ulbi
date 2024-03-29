import { FC, MutableRefObject, ReactNode, UIEvent, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { StateSchema } from "@/app/providers/StoreProvider";
import {
    useAppDispatch,
    useInfiniteScroll,
    useInitialEffect,
    useThrottle,
} from "@/shared/hooks";
import { classNames } from "@/shared/lib";
import { Button, ButtonTheme } from "@/shared/ui";
import { getPageScrollByPath } from "@/widgets/Page/model/selectors/page";
import { pageActions } from "../../model/slice/pageSlice";
import cls from "./Page.module.scss";
import { TestProps } from "@/shared/types";

interface PageProps extends TestProps {
    className?: string;
    isSaveScroll?: boolean;
    onScrollEnd?: () => void;
    children: ReactNode;
}

export const Page: FC<PageProps> = (props) => {
    const { className, children, onScrollEnd, isSaveScroll = false } = props;

    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();

    const scrollPosition = useSelector((state: StateSchema) =>
        getPageScrollByPath(state, pathname)
    );

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        if (isSaveScroll) {
            dispatch(
                pageActions.setScrollPosition({
                    path: pathname,
                    position: e.currentTarget.scrollTop,
                })
            );
        }
    }, 500);

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
        <main
            id="scroll-element"
            // eslint-disable-next-line react/destructuring-assignment
            data-testid={props["data-testid"] ?? "Page"}
            ref={wrapperRef}
            onScroll={onScroll}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            {onScrollEnd ? (
                <div ref={triggerRef} className={cls.trigger} />
            ) : // <Button
            //     theme={ButtonTheme.BACKGROUND}
            //     onClick={onScrollEnd}
            //     className={cls.button}
            // >
            //     {t("Загрузить еще")}
            // </Button>
            null}
        </main>
    );
};
