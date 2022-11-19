import { FC, memo, useCallback } from "react";
import { FetchArticles, fetchNextArticles } from "features/FetchArticles";
import { useAppDispatch } from "shared/hooks";
import { classNames } from "shared/lib";
import { Page } from "shared/ui";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticles());
        console.log(1);
    }, [dispatch]);

    return (
        <Page
            onScrollEnd={onLoadNextPart}
            className={classNames(cls.ArticlesPage, {}, [className])}
        >
            <FetchArticles />
        </Page>
    );
};
export default memo(ArticlesPage);
