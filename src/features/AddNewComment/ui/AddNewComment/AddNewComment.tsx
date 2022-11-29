import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
    ReducersList,
    useAppDispatch,
    useDynamicModuleLoader,
} from "shared/hooks";
import { classNames } from "shared/lib";
import { Button, ButtonTheme, HStack, Input } from "shared/ui";
import {
    getNewCommentError,
    getNewCommentText,
} from "../../model/selectors/addNewComment";
import {
    addNewCommentActions,
    addNewCommentReducer,
} from "../../model/slice/addNewCommentSlice";
import cls from "./AddNewComment.module.scss";

export interface AddNewCommentProps {
    onSendComment: (value: string) => void;
    className?: string;
}

const reducers: ReducersList = {
    addNewComment: addNewCommentReducer,
};

const AddNewComment: FC<AddNewCommentProps> = memo((props) => {
    useDynamicModuleLoader(reducers);
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getNewCommentText);
    const error = useSelector(getNewCommentError);

    const onChangeComment = useCallback(
        (value: string) => {
            dispatch(addNewCommentActions.setText(value));
        },
        [dispatch]
    );
    const onSendHandler = useCallback(() => {
        onSendComment(text);
        onChangeComment("");
    }, [onSendComment, onChangeComment, text]);

    return (
        <HStack
            justify="between"
            gap="12"
            className={classNames(cls.AddNewComment, {}, [className])}
        >
            <Input
                placeholder={t("Введите текст комментария")}
                value={text}
                onChange={onChangeComment}
            />
            <Button theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>
                {t("Добавить")}
            </Button>
        </HStack>
    );
});

export default AddNewComment;
