import { FC, useState } from "react";
import classes from "./counter.module.scss";

export const Counter: FC = ({}) => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <div>{count}</div>
            <button onClick={increase} className={classes.btn}>
                Увеличить 222
            </button>
        </div>
    );
};
