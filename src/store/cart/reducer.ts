import { ADD_ITEM } from "./action"


const initState = {
    quantity: 0,
    cart: []
}

function CartReducer (state = initState, action: any) {
    switch (action.type) {
        case ADD_ITEM: 
        console.log(action.payload)
        return{
          ...state,
          cart: [...state.cart, action.payload]
        }

        default: return state
      }
}

export default CartReducer  