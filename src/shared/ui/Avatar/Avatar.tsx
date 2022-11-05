import { CSSProperties, memo, useMemo } from "react";
import { classNames } from "shared/lib";
import AvatarImg from "./default-avatar.png";
import cls from "./Avatar.module.scss";

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, src = AvatarImg, alt, size } = props;

    const styles = { width: size, height: size };

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
});
