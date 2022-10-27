import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { EditableProfileCard } from "features/EditableProfileCard";

interface ProfilePageProps {}

const ProfilePage: FC<ProfilePageProps> = memo(() => {
    const { t } = useTranslation("profile");

    return (
        <div>
            <EditableProfileCard />
        </div>
    );
});
export default ProfilePage;
