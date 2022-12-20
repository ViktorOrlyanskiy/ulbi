import {
    FC,
    ImgHTMLAttributes,
    memo,
    ReactElement,
    useLayoutEffect,
    useState,
} from "react";

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorfallback?: ReactElement;
}

export const AppImage: FC<AppImageProps> = memo((props) => {
    const {
        src,
        alt = "image",
        fallback,
        errorfallback,
        className,
        ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? "";
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorfallback) {
        return errorfallback;
    }

    return <img src={src} alt={alt} className={className} {...otherProps} />;
});
