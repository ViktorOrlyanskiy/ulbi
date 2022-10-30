import { FC, useEffect, useState } from "react";
import { Button, ButtonTheme } from "shared/ui";

// компонент для тестирования
export const BugButton: FC = () => {
    const [error, setError] = useState(false);

    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        // eslint-disable-next-line
        <Button onClick={onThrow} theme={ButtonTheme.BACKGROUND}>
            Throw error
        </Button>
    );
};
