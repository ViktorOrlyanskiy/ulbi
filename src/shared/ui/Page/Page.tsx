import { FC, MutableRefObject, useRef } from "react";
import { useInfiniteScroll } from "shared/hooks";
import { classNames } from "shared/lib";
import cls from "./Page.module.scss";

interface PageProps {
    className?: string;
    onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = (props) => {
    const { className, children, onScrollEnd } = props;

    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <section
            id="scroll-element"
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            <div ref={triggerRef} className={cls.trigger} />
        </section>
    );
};
