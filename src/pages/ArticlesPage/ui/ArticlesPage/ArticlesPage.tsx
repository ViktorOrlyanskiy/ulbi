import { FC, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { Page } from "widgets/Page";
import {
    getInited,
    getOrder,
    getSearch,
    getSort,
    getType,
    getView,
    SortingArticles,
} from "features/SortingArticles";
import { FetchArticles, fetchNextArticles } from "features/FetchArticles";
import { useAppDispatch, useDebounce } from "shared/hooks";
import { classNames } from "shared/lib";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch();

    const sort = useSelector(getSort);
    const order = useSelector(getOrder);
    const view = useSelector(getView);
    const search = useSelector(getSearch);
    const type = useSelector(getType);
    const initedFilters = useSelector(getInited);

    const onLoadNextPart = useCallback(() => {
        if (initedFilters) {
            dispatch(fetchNextArticles({ sort, order, search, type }));
        }
    }, [dispatch, sort, order, search, type, initedFilters]);

    return (
        <Page
            isSaveScroll
            onScrollEnd={onLoadNextPart}
            className={classNames(cls.ArticlesPage, {}, [className])}
        >
            <SortingArticles className={cls.sort} />
            {initedFilters && (
                <FetchArticles
                    sort={sort}
                    order={order}
                    view={view}
                    search={search}
                    type={type}
                />
            )}
        </Page>
    );
};
export default memo(ArticlesPage);
