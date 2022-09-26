import { FC, useEffect, useState } from "react";
import { Button } from "shared/ui";

// компонент для тестирования
export const BugButton: FC = () => {
    const [error, setError] = useState(false);

    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);
    // eslint-disable-next-line
    return <Button onClick={onThrow}>throw error</Button>;
};
