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

// reducer -action

const initialState = {
 count: 0
};

const countReducer = (state= initialState, action) =>{
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return{
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
};