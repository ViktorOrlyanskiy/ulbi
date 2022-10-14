import { FC } from "react";
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
