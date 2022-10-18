import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";

const AboutPage: FC = () => {
    classNames("", {}, []);
    const { t } = useTranslation("about");

    return <div>{t("О нас")}</div>;
};
export default AboutPage;
