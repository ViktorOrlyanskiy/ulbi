import { Country, CountrySelect } from "entities/Country";
import { Currency, CurrencySelect } from "entities/Currency";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";
import {
    Avatar,
    HStack,
    Input,
    Loader,
    Text,
    TextTheme,
    TextWeight,
    VStack,
} from "shared/ui";
import { TextAlign } from "shared/ui/Text/Text";

import { Profile } from "../../model/types/profile";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { t } = useTranslation("profile");
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    if (isLoading) {
        return (
            <HStack justify="center">
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify="center">
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t("Произошла ошибка при загрузке профиля")}
                    text={t("Попробуйте обновить страницу")}
                />
            </HStack>
        );
    }

    return (
        <VStack gap="12" className={classNames("", {}, [className])}>
            <HStack>
                <Avatar src={data?.avatar} size={100} />
            </HStack>
            <HStack max justify="between" gap="12" className={cls.item}>
                <Text text={t("Имя")} weight={TextWeight.BOLD} />
                <Input
                    readonly={readonly}
                    value={data?.first}
                    onChange={onChangeFirstname}
                    data-testid="ProfileCard.first"
                />
            </HStack>
            <HStack max justify="between" gap="12" className={cls.item}>
                <Text text={t("Фамилия")} weight={TextWeight.BOLD} />
                <Input
                    readonly={readonly}
                    value={data?.lastname}
                    onChange={onChangeLastname}
                    data-testid="ProfileCard.lastname"
                />
            </HStack>
            <HStack max justify="between" gap="12" className={cls.item}>
                <Text text={t("Возраст")} weight={TextWeight.BOLD} />
                <Input
                    onlyIntegerNumber
                    readonly={readonly}
                    value={data?.age}
                    onChange={onChangeAge}
                />
            </HStack>
            <HStack max justify="between" gap="12" className={cls.item}>
                <Text text={t("Город")} weight={TextWeight.BOLD} />
                <Input
                    readonly={readonly}
                    value={data?.city}
                    onChange={onChangeCity}
                    data-testid="ProfileCard.city"
                />
            </HStack>
            <HStack max justify="between" gap="12" className={cls.item}>
                <Text text={t("Никнейм")} weight={TextWeight.BOLD} />
                <Input
                    readonly={readonly}
                    value={data?.username}
                    onChange={onChangeUsername}
                    data-testid="ProfileCard.username"
                />
            </HStack>
            <HStack max justify="between" gap="12" className={cls.item}>
                <Text text={t("Ссылка на аватар")} weight={TextWeight.BOLD} />
                <Input
                    readonly={readonly}
                    value={data?.avatar}
                    onChange={onChangeAvatar}
                />
            </HStack>
            <HStack max justify="between" gap="12" className={cls.item}>
                <Text text={t("Валюта")} weight={TextWeight.BOLD} />
                <CurrencySelect
                    readonly={readonly}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                />
            </HStack>
            <HStack max justify="between" gap="12" className={cls.item}>
                <Text text={t("Страна")} weight={TextWeight.BOLD} />
                <CountrySelect
                    readonly={readonly}
                    value={data?.country}
                    onChange={onChangeCountry}
                />
            </HStack>
        </VStack>
    );
};
