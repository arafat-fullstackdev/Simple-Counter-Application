import Count from './Count';
import Button from './Button';

import { useState } from "react";

export default  function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount((prevCount)=> prevCount - 1);
    };

    return(
        <div className="p-4 h-auto flex-col items-center
        justify-center space-y-5 bg-white rounded shadow">
         <Count count={count} />
         <div className='flex space-x-3'>
         <Button handler={handleIncrement}>Increment</Button>
         <Button type="danger" handler={handleDecrement}>Decrement</Button>
         </div>
        </div>
    );
}