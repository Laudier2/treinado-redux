import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantyti: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart(state, action) {

            const itemsIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (itemsIndex >= 0) {
                state.cartItems[itemsIndex].cartQuantity += 1
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct)
            }
        }
    }
})

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;
/*
// Adiciona um item expecifico a lista do carrimho
    [addItem.type]: (state, action) => [...state, action.payload],
    // Filtra um item especifico e remove
    [removeItem.type]: ((state, action) => state.filter((item) => item.product.id !== action.payload))
*/
