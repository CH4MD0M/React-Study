// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

// Counter
// const initialCounterState = { counter: 0, showCounter: true };
// const counterSlice = createSlice({
//     name: "counter",
//     initialState: initialCounterState,
//     reducers: {
//         increment(state) {
//             state.counter++;
//         },
//         decrement(state) {
//             state.counter--;
//         },
//         increase(state, action) {
//             state.counter += action.payload;
//         },
//         toggleCounter(state) {
//             state.showCounter = !state.showCounter;
//         },
//     },
// });

// Authentication
// const initialAuthState = { isAuthenticated: false };
// const authSlice = createSlice({
//     name: "authentication",
//     initialState: initialAuthState,
//     reducers: {
//         login(state) {
//             state.isAuthenticated = true;
//         },
//         logout(state) {
//             state.isAuthenticated = false;
//         },
//     },
// });

// const counterReducer = (state = initialState, action) => {
//     if (action.type === "increment") {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === "increase") {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === "decrement") {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === "toggle") {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter,
//         };
//     }
//     return state;
// };

// Store
// const store = createStore(counterReducer);
const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer },
});

// Actions exports(for using dispatch)
// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;
