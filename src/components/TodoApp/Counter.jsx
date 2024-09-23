import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement } from './Action';

const CounterToDO = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={() =>dispatch(increment(1))}>Increment</button>
            <button onClick={() =>dispatch(decrement(1))}>Decrement</button>
        </div>
    );
};

export default CounterToDO;