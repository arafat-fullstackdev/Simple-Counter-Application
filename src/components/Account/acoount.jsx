// state - count:0
// action - increment, decrement, reset
// reducer
// store

// CONSTANTS

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// 1.state
const initialState = {
    count: 0,
};

// 2. Action
const incrementCounterAction = () => {
    return{
        type: INCREMENT,
    };
};

const decrementCounterAction = () => {
    return{
        type: DECREMENT,
    };
};