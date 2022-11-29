import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileCard, ValidateProfileError } from "entities/Profile";
import {
    ReducersList,
    useAppDispatch,
    useDynamicModuleLoader,
    useInitialEffect,
} from "shared/hooks";
import { classNames } from "shared/lib";
import { Button, ButtonTheme, HStack, Text, TextTheme } from "shared/ui";

import { getCanEdit } from "../../model/selectors/getCanEdit/getCatEdit";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { profileActions, profileReducer } from "../../model/slice/profileSlice";
import cls from "./EditableProfileCard.module.scss";

interface EditableProfileCardProps {
    className?: string;
}
const reducers: ReducersList = {
    profile: profileReducer,
};
export const EditableProfileCard: FC<EditableProfileCardProps> = (props) => {
    useDynamicModuleLoader(reducers);
    const { className } = props;
    const { t } = useTranslation("profile");
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    const formData = useSelector(getProfileForm);
    const canEdit = useSelector(getCanEdit);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    // обработчики кнопок
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    // обработчики инпутов
    const onChangeFirstname = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ first: value || "" }));
        },
        [dispatch]
    );
    const onChangeLastname = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || "" }));
        },
        [dispatch]
    );
    const onChangeAge = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
        },
        [dispatch]
    );
    const onChangeCity = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ city: value || "" }));
        },
        [dispatch]
    );
    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ username: value || "" }));
        },
        [dispatch]
    );
    const onChangeAvatar = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || "" }));
        },
        [dispatch]
    );
    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfile({ currency }));
        },
        [dispatch]
    );
    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch]
    );

    const validateErrorTranslates = {
        [ValidateProfileError.INCORRECT_USER_DATA]: t(
            "Имя и фамилия обязательны"
        ),
        [ValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),

        [ValidateProfileError.INCORRECT_CITY]: t("Город не указан"),
        [ValidateProfileError.NO_DATA]: t("Данные не указаны"),
        [ValidateProfileError.SERVER_ERROR]: t(
            "Серверная ошибка при сохранении"
        ),
    };

    return (
        <div className={classNames(cls.EditableProfileCard, {}, [className])}>
            <HStack justify="between" className={cls.header}>
                <Text title={t("Профиль")} />
                {canEdit &&
                    (readonly ? (
                        <HStack justify="center" gap="12">
                            <Button
                                theme={ButtonTheme.BACKGROUND}
                                onClick={onEdit}
                            >
                                {t("Редактировать")}
                            </Button>
                        </HStack>
                    ) : (
                        <HStack>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onCancelEdit}
                            >
                                {t("Отменить")}
                            </Button>
                            <Button
                                theme={ButtonTheme.BACKGROUND}
                                onClick={onSave}
                            >
                                {t("Сохранить")}
                            </Button>
                        </HStack>
                    ))}
            </HStack>
            {validateErrors?.length &&
                validateErrors.map((err) => (
                    <Text
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[err]}
                        key={err}
                    />
                ))}
            <ProfileCard
                data={formData}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </div>
    );
};
