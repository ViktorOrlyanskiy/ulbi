import { FC, memo, useCallback } from "react";
import { classNames } from "shared/lib";
import CopyIcon from "shared/assets/icons/articles/copy.svg";
import { Button, ButtonTheme } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import cls from "./Code.module.scss";

interface CodeProps {
    children: string; // ожидает строку т.к. использует React.memo
    className?: string;
}

export const Code: FC<CodeProps> = memo((props) => {
    const { children, className } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(children);
    }, [children]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                theme={ButtonTheme.ICON}
                className={cls.copyButton}
            >
                <Icon Svg={CopyIcon} size={15} />
            </Button>
            <code>{children}</code>
        </pre>
    );
});
