import { FC, memo } from "react";
import { classNames } from "shared/lib";
import { HStack, Loader } from "shared/ui";
import cls from "./PageLoader.module.scss";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = memo((props) => {
    const { className } = props;

    return (
        <HStack
            justify="center"
            className={classNames(cls.PageLoader, {}, [className])}
        >
            <Loader />
        </HStack>
    );
});
