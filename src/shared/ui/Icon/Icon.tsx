import { FC, memo } from "react";
import { classNames } from "shared/lib";
import cls from "./Icon.module.scss";

interface IconProps {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    size: number;
    className?: string;
}

export const Icon: FC<IconProps> = memo((props) => {
    const { Svg, size, className } = props;

    const styles = { width: size, height: size };

    return (
        <Svg style={styles} className={classNames(cls.Icon, {}, [className])} />
    );
});
