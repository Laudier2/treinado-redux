import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = []

export const addItem = createAction('AADD_ITEM')
export const removeItem = createAction('REMOVE_ITEM')

export default createReducer(INITIAL_STATE, {
  // Adiciona um item expecifico a lista do carrimho
  [addItem.type]: (state, action) => [...state, action.payload],
  // Filtra um item especifico e remove
  [removeItem.type]: ((state, action) => state.filter((item) => item.product.id !== action.payload))
})

/*
// Adiciona um item expecifico a lista do carrimho
    [addItem.type]: (state, action) => [...state, action.payload],
    // Filtra um item especifico e remove
    [removeItem.type]: ((state, action) => state.filter((item) => item.product.id !== action.payload))
*/

/**
 funcBtnAdd = (event) => {
    const check = this.state.car.filter(item => item.id == event.id);
    event.btnDisabled = true;

    const isCarAlreadyAdded = this.carAdd.some(car => car.id === check.id);
    
    if (!isCarAlreadyAdded) {
      this.setState(prevState => ({
        carAdd: [...prevState, check]
      }))
    }
  }


  -----------------------------------------------------------------------------------------------

  import { createAction, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cartItem: [],
    cartTotalQuery: 0,
    cartTotalAmount: 0,
}

export const addItem = createAction('AADD_ITEM')
export const removeItem = createAction('REMOVE_ITEM')

const cartSlice = createSlice({
    name: "cart",
    INITIAL_STATE,
    reducers: {
        addItem(state, action) {
            const itemIndex = state.cartItem.findIndex(
                (item) => item.id === action.payload.id
            )
            if (itemIndex) {
                state.cartItem[itemIndex].quantity += 1
            } else {
                const tempProduct = { ...action.payload, quantity: 1 }
                state.cartItem.push(tempProduct)
            }
        }
    }
})

export default cartSlice;



 */
