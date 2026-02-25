import { useState } from "react";

export const useToggle = (initialValue: boolean = false) => {
    const [value, setValue] = useState(initialValue); // defaultnya adalah false.
    const toggle = () => {
        setValue(!value); //membalikkan nilai boolean.
    };
    return [value, toggle] as const;
};
