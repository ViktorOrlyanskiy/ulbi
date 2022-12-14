import { FC, memo } from "react";
import { classNames } from "@/shared/lib";
import cls from "./Icon.module.scss";

interface IconProps extends React.SVGProps<SVGSVGElement> {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    size: number;
    className?: string;
}

export const Icon: FC<IconProps> = memo((props) => {
    const { Svg, size, className, ...otherProps } = props;

    const styles = { width: size, height: size };

    return (
        <Svg style={styles} className={classNames(cls.Icon, {}, [className])} {...otherProps}/>
    );
});
