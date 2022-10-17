import { loginActions } from "features/AuthByUsername/model/slice/loginSlice";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { classNames } from "shared/lib";
import { Modal } from "shared/ui";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, isOpen, onClose } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isOpen) {
            dispatch(loginActions.setInitialState());
        }
    }, [dispatch, isOpen]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={classNames("", {}, [className])}
        >
            <LoginForm />
        </Modal>
    );
};
