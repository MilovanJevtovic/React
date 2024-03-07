import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const decrease = () => {
        setCounter((prevCounter) => prevCounter - 1);
    };

    const reset = () => {
        setCounter(0);
    };

    const increase = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={decrease}>-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default Counter;
