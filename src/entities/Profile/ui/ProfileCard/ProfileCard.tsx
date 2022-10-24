import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib";
import { Button, ButtonTheme, Input, Text } from "shared/ui";

import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation("profile");
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t("Профиль")} />
                <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
                    {t("Редактировать")}
                </Button>
            </div>
            <div className={cls.body}>
                <div className={cls.item}>
                    <Text text={t("Ваше имя")} />
                    <Input value={data?.first} className={cls.input} />
                </div>
                <div className={cls.item}>
                    <Text text={t("Ваше фамилия")} />
                    <Input value={data?.lastname} className={cls.input} />
                </div>
            </div>
        </div>
    );
};
