// state - count:0
// action - increment, decrement, reset
// reducer
// store

// CONSTANTS

const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const DECREMENT = "DECREMENT";
const RESET = 'RESET';

// 1.state
// eslint-disable-next-line no-unused-vars
const initialState = {
    count: 0,
};

// 2. Action
// eslint-disable-next-line no-unused-vars
const incrementCounterAction = () => {
    return{
        type: INCREMENT,
    };
};

// eslint-disable-next-line no-unused-vars
const decrementCounterAction = () => {
    return{
        type: DECREMENT,
    };
};

// eslint-disable-next-line no-unused-vars
const resetCounter = () => {
    return{
        type: RESET,
    };
};

// eslint-disable-next-line no-unused-vars
const incrementValue = () => {
    return{
        type: INCREMENT_BY_VALUE,
    };
};

// 3 Reducers
