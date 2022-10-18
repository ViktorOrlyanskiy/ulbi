import { FC, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { classNames } from "shared/lib";
import { Loader, Modal } from "shared/ui";
import { loginActions } from "../../model/slice/loginSlice";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";

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
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
