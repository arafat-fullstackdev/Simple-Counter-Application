// define constant
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// State creator
const increment = () => {
    return {
        type: INCREMENT
    };
};

const decrement = () => {
    return {
        type: DECREMENT
    };
};