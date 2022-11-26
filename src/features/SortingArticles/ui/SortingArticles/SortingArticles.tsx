import { FC, memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { ArticleView, ArticleSort, ArticleType } from "entities/Article";
import { addQueryParams, classNames } from "shared/lib";
import {
    ReducersList,
    useAppDispatch,
    useDynamicModuleLoader,
    useInitialEffect,
} from "shared/hooks";
import { SortOrder } from "shared/types";
import {
    Input,
    InputSize,
    Select,
    SelectOption,
    TabItem,
    Tabs,
    Text,
    TextSize,
} from "shared/ui";

import {
    getSort,
    getOrder,
    getView,
    getSearch,
    getType,
} from "../../model/selectors/sortingArticles";
import {
    sortingArticlesActions,
    sortingArticlesReducer,
} from "../../model/slice/sortingArticlesSlice";
import { ArticlesViewSwitcher } from "../ArticlesViewSwitcher/ArticlesViewSwitcher";
import cls from "./SortingArticles.module.scss";

interface SortingArticlesProps {
    className?: string;
}

const initialReducers: ReducersList = {
    sortingArticles: sortingArticlesReducer,
};

export const SortingArticles: FC<SortingArticlesProps> = memo((props) => {
    useDynamicModuleLoader(initialReducers, false);
    const { className } = props;
    const { t } = useTranslation("articles");
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const sort = useSelector(getSort);
    const order = useSelector(getOrder);
    const view = useSelector(getView);
    const search = useSelector(getSearch);
    const type = useSelector(getType);

    addQueryParams({ sort, order, search, type });
    const sortFromUrl = searchParams.get("sort");
    const orderFromUrl = searchParams.get("order");
    const searchFromUrl = searchParams.get("search");
    const typeFromUrl = searchParams.get("type");

    const sortOptions = useMemo<SelectOption[]>(
        () => [
            { value: ArticleSort.CREATED, content: t("дате создания") },
            { value: ArticleSort.TITLE, content: t("названию") },
            { value: ArticleSort.VIEWS, content: t("просмотрам") },
        ],
        [t]
    );

    const orderOptions = useMemo<SelectOption[]>(
        () => [
            { value: "asc", content: t("по возрастанию") },
            { value: "desc", content: t("по убыванию") },
        ],
        [t]
    );

    const typeOptions = useMemo<TabItem[]>(
        () => [
            { value: ArticleType.ALL, content: t("Все статьи") },
            { value: ArticleType.IT, content: t("Айти") },
            { value: ArticleType.ECONOMICS, content: t("Экономика") },
            { value: ArticleType.SCIENCE, content: t("Наука") },
        ],
        [t]
    );

    const onChangeSort = useCallback(
        (newSort: string) => {
            dispatch(sortingArticlesActions.setSort(newSort as ArticleSort));
        },
        [dispatch]
    );

    const onChangeOrder = useCallback(
        (newOrder: string) => {
            dispatch(sortingArticlesActions.setOrder(newOrder as SortOrder));
        },
        [dispatch]
    );

    const onChangeView = useCallback(
        (newView: ArticleView) => {
            dispatch(sortingArticlesActions.setView(newView));
        },
        [dispatch]
    );

    const onChangeSearch = useCallback(
        (newSearch: string) => {
            dispatch(sortingArticlesActions.setSearch(newSearch));
        },
        [dispatch]
    );

    const onChangeType = useCallback(
        (tab: TabItem) => {
            dispatch(sortingArticlesActions.setType(tab.value as ArticleType));
        },
        [dispatch]
    );

    useInitialEffect(() => {
        const initFilters = {
            sort: sortFromUrl,
            order: orderFromUrl,
            search: searchFromUrl,
            type: typeFromUrl,
        };
        dispatch(sortingArticlesActions.initState(initFilters));
    });

    return (
        <div className={classNames("", {}, [className])}>
            <div className={cls.row}>
                <Text title={t("Сортировать по")} size={TextSize.S} />
                <Select
                    value={sort}
                    options={sortOptions}
                    onChange={onChangeSort}
                    className={cls.select}
                />
                <Select
                    value={order}
                    options={orderOptions}
                    onChange={onChangeOrder}
                    className={cls.select}
                />
                <ArticlesViewSwitcher view={view} onViewClick={onChangeView} />
            </div>
            <Input
                value={search}
                onChange={onChangeSearch}
                placeholder={t("Поиск")}
                size={InputSize.M}
            />
            <Tabs
                tabs={typeOptions}
                value={type}
                onTabClick={onChangeType}
                className={cls.tabs}
            />
        </div>
    );
});
