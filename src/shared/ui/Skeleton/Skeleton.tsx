import { CSSProperties, FC, memo } from "react";
import { classNames } from "shared/lib";
import cls from "./Skeleton.module.scss";

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    borderRadius?: string;
}

export const Skeleton: FC<SkeletonProps> = memo((props) => {
    const { className, height, width, borderRadius } = props;

    const styles: CSSProperties = { height, width, borderRadius };

    return (
        <div
            style={styles}
            className={classNames(cls.Skeleton, {}, [className])}
        />
    );
});
