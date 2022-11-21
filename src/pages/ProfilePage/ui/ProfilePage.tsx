import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page";
import { EditableProfileCard } from "features/EditableProfileCard";

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
