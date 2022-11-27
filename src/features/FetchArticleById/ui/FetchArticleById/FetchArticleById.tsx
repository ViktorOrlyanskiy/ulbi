import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ArticleDetails } from "entities/Article";
import { RoutePath } from "shared/const";
import {
    ReducersList,
    useAppDispatch,
    useDynamicModuleLoader,
    useInitialEffect,
} from "shared/hooks";
import { classNames } from "shared/lib";
import { Button, ButtonTheme, Text, TextAlign, TextTheme } from "shared/ui";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
    getCanEditArticle,
} from "../../model/selectors/articleDetails";
import { fetchArticleById } from "../../model/services/fetchArticleById";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import cls from "./FetchArticleById.module.scss";

interface FetchArticleByIdProps {
    id: string;
    className?: string;
}

const initialReducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const FetchArticleById: FC<FetchArticleByIdProps> = memo((props) => {
    useDynamicModuleLoader(initialReducers);
    const { id, className } = props;
    const { t } = useTranslation("articles");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const article = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const isCanEdit = useSelector(getCanEditArticle);

    const onClickBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${id}/edit`);
    }, [navigate, id]);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    if (error) {
        return (
            <div className={classNames("", {}, [className])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    text={t("Произошла ошибка при загрузки страницы")}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.FetchArticleById, {}, [className])}>
            <div className={cls.header}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onClickBackToList}>
                    {t("Назад к списку")}
                </Button>
                {isCanEdit && (
                    <Button
                        theme={ButtonTheme.BACKGROUND}
                        onClick={onEditArticle}
                        className={cls.editBtn}
                    >
                        {t("Редактировать")}
                    </Button>
                )}
            </div>
            <ArticleDetails article={article} isLoading={isLoading} />
        </div>
    );
});
