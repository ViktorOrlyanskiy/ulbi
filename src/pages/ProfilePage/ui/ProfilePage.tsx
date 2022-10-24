import { FC, memo, useEffect } from "react";
import { useTranslation } from "react-i18next";

import {
    fetchProfileData,
    ProfileCard,
    profileReducer,
} from "entities/Profile";
import {
    ReducersList,
    useAppDispatch,
    useDynamicModuleLoader,
} from "shared/hooks";

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {}

const ProfilePage: FC<ProfilePageProps> = memo(() => {
    useDynamicModuleLoader(reducers);
    const { t } = useTranslation("profile");
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <div>
            <ProfileCard />
        </div>
    );
});
export default ProfilePage;
