import { useEffect, useRef } from "react";

// показывает что компонент монтировался
export function useComponentDidMount() {
    const ref = useRef<boolean | null>();

    useEffect(() => {
        ref.current = true;
    }, []);

    return ref.current;
}
