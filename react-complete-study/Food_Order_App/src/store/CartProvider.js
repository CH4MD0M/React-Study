import { useReducer } from "react";
import CartContext from "./cart-context";

// Reducer_InitialState
const defaultCartState = {
    items: [],
    totalAmount: 0,
};

// Reducer 함수
const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existinCartItem = state.items[existingCartItemIndex];

        const updatedItems = state.items.concat(action.item);

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultCartState;
};

const CartProvider = (props) => {
    // Reducer 생성
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemCartHandler = (item) => {
        dispatchCartAction({ type: "ADD", item: item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id });
    };

    const { items, totalAmount } = cartState;
    const cartContext = {
        items: items,
        totalAmount: totalAmount,
        addItem: addItemCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
