import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setTimeout(()=> {setCount(count => count+1)}, 1000)
    }
    return (
        <div onClick={increment}>
            {count}
        </div>
    );
};

export default Counter;