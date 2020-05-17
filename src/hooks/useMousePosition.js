import { useState, useEffect } from "react";

export const useMousePosition = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMoveListener = (e) => {
            setPos({ x: e.pageX, y: e.pageY });
        };

        document.addEventListener("mousemove", mouseMoveListener);

        return () => {
            document.removeEventListener("mousemove", mouseMoveListener);
        };
    }, [])

    return pos;
};
