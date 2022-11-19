import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { EditableProfileCard } from "features/EditableProfileCard";
import { Page } from "shared/ui";

interface ProfilePageProps {}

const ProfilePage: FC<ProfilePageProps> = memo(() => {
    const { t } = useTranslation("profile");

    return (
        <Page>
            <EditableProfileCard />
        </Page>
    );
});
export default ProfilePage;
