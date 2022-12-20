import { memo } from "react";
import { classNames } from "@/shared/lib";
import AvatarImg from "./default-avatar.png";
import cls from "./Avatar.module.scss";
import { AppImage } from "../AppImage/AppImage";
import { Icon } from "../Icon/Icon";
import { Skeleton } from "../Skeleton/Skeleton";

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, src = AvatarImg, alt, size = 30 } = props;

    const styles = { width: size, height: size };
    const fallback = <Skeleton width={size} height={size} borderRadius="50%" />;
    const errorfallback = <Icon Svg={AvatarImg} size={size} />;

    return (
        <AppImage
            src={src}
            alt={alt}
            style={styles}
            fallback={fallback}
            errorfallback={errorfallback}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
});
