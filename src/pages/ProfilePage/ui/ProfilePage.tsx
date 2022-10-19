import { profileReducer } from "entities/Profile";
import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { ReducersList, useDynamicModuleLoader } from "shared/hooks";

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {}

const ProfilePage: FC<ProfilePageProps> = memo(() => {
    useDynamicModuleLoader(reducers);
    const { t } = useTranslation("profile");

    return <div> {t("Профиль пользователя")}</div>;
});
export default ProfilePage;
