import { Country, CountrySelect } from "entities/Country";
import { Currency, CurrencySelect } from "entities/Currency";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";
import {
    Avatar,
    Input,
    Loader,
    Select,
    Text,
    TextTheme,
    TextWeight,
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
            <div className={cls.loading}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={cls.error}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t("Произошла ошибка при загрузке профиля")}
                    text={t("Попробуйте обновить страницу")}
                />
            </div>
        );
    }

    // проверяет что в инпут вводиться только число
    const checkForNumber = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    };

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.avatarWrapper}>
                <Avatar src={data?.avatar} />
            </div>
            <div className={cls.item}>
                <Text
                    text={t("Имя")}
                    className={cls.label}
                    weight={TextWeight.BOLD}
                />
                <Input
                    className={cls.input}
                    readonly={readonly}
                    value={data?.first}
                    onChange={onChangeFirstname}
                />
            </div>
            <div className={cls.item}>
                <Text
                    text={t("Фамилия")}
                    className={cls.label}
                    weight={TextWeight.BOLD}
                />
                <Input
                    className={cls.input}
                    readonly={readonly}
                    value={data?.lastname}
                    onChange={onChangeLastname}
                />
            </div>
            <div className={cls.item}>
                <Text
                    text={t("Возраст")}
                    className={cls.label}
                    weight={TextWeight.BOLD}
                />
                <Input
                    className={cls.input}
                    readonly={readonly}
                    value={data?.age}
                    onChange={onChangeAge}
                    onKeyPress={checkForNumber}
                />
            </div>
            <div className={cls.item}>
                <Text
                    text={t("Город")}
                    className={cls.label}
                    weight={TextWeight.BOLD}
                />
                <Input
                    className={cls.input}
                    readonly={readonly}
                    value={data?.city}
                    onChange={onChangeCity}
                />
            </div>
            <div className={cls.item}>
                <Text
                    text={t("Никнейм")}
                    className={cls.label}
                    weight={TextWeight.BOLD}
                />
                <Input
                    className={cls.input}
                    readonly={readonly}
                    value={data?.username}
                    onChange={onChangeUsername}
                />
            </div>
            <div className={cls.item}>
                <Text
                    text={t("Ссылка на аватар")}
                    className={cls.label}
                    weight={TextWeight.BOLD}
                />
                <Input
                    className={cls.input}
                    readonly={readonly}
                    value={data?.avatar}
                    onChange={onChangeAvatar}
                />
            </div>
            <div className={cls.item}>
                <Text
                    text={t("Валюта")}
                    className={cls.label}
                    weight={TextWeight.BOLD}
                />
                <CurrencySelect
                    className={cls.input}
                    readonly={readonly}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                />
            </div>
            <div className={cls.item}>
                <Text
                    text={t("Страна")}
                    className={cls.label}
                    weight={TextWeight.BOLD}
                />
                <CountrySelect
                    className={cls.input}
                    readonly={readonly}
                    value={data?.country}
                    onChange={onChangeCountry}
                />
            </div>
        </div>
    );
};
