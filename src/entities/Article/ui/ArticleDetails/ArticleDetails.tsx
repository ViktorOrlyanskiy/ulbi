import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CalendarIcon from "shared/assets/icons/articles/calendar.svg";
import EyeIcon from "shared/assets/icons/articles/eye.svg";
import { RoutePath } from "shared/const";
import {
    ReducersList,
    useAppDispatch,
    useDynamicModuleLoader,
    useInitialEffect,
} from "shared/hooks";
import { classNames } from "shared/lib";
import {
    Avatar,
    Button,
    ButtonTheme,
    Icon,
    Skeleton,
    Text,
    TextAlign,
    TextSize,
    TextTheme,
} from "shared/ui";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { fetchArticleById } from "../../model/services/fetchArticleById";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { ArticleBlock, ArticleBlockType } from "../../model/types/article";
import { ArticleBlockCode } from "../ArticleBlockCode/ArticleBlockCode";
import { ArticleBlockImage } from "../ArticleBlockImage/ArticleBlockImage";
import { ArticleBlockText } from "../ArticleBlockText/ArticleBlockText";
import cls from "./ArticleDetails.module.scss";

interface ArticleDetailsProps {
    id: string;
    className?: string;
}

const initialReducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
    useDynamicModuleLoader(initialReducers);
    const { id, className } = props;
    const { t } = useTranslation("articles");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const article = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    const onClickBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    const renderBlock = (block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleBlockCode
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                );

            case ArticleBlockType.IMAGE:
                return (
                    <ArticleBlockImage
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                );

            case ArticleBlockType.TEXT:
                return (
                    <ArticleBlockText
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                );

            default:
                return null;
        }
    };

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    borderRadius="50%"
                />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.subtitle} width={500} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    text={t("Произошла ошибка при загрузки страницы")}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onClickBackToList}>
                {t("Назад к списку")}
            </Button>
            <div className={cls.avatarWrapper}>
                <Avatar
                    size={200}
                    src={article?.img}
                    alt={article?.title}
                    className={cls.avatar}
                />
            </div>
            <Text
                title={article?.title}
                text={article?.subtitle}
                size={TextSize.L}
                className={cls.title}
            />
            <div className={cls.articleInfo}>
                <Icon Svg={EyeIcon} size={15} />
                <Text text={String(article?.views)} />
            </div>
            <div className={cls.articleInfo}>
                <Icon Svg={CalendarIcon} size={15} />
                <Text text={article?.createdAt} />
            </div>
            {article?.blocks.map(renderBlock)}
        </div>
    );
});
