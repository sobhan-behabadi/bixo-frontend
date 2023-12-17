import {useState} from "react";


export const useToggle = (initialValue = 0) => {
    const [state, setState] = useState(initialValue);

    const increment = () => {
        setState(state + 1);
    }
    const decrement = () => {
        setState(state - 1);

    }

    const reset = () => {
        setState(0);

    }

    return {increment, decrement, reset, state};

}