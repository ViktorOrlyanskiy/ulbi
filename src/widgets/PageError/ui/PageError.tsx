import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";
import { Button, ButtonTheme, Text, VStack } from "shared/ui";
import cls from "./PageError.module.scss";

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = memo(({ className }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line
        location.reload();
    };

    return (
        <VStack
            max
            align="center"
            justify="center"
            gap="12"
            className={classNames(cls.PageError, {}, [className])}
        >
            <Text title={t("Произошла непредвиденная ошибка")} />
            <Button theme={ButtonTheme.BACKGROUND} onClick={reloadPage}>
                {t("Обновить страницу")}
            </Button>
        </VStack>
    );
});
