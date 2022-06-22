import { GET_IPHONE, GET_ITEMS } from "./action";

const initState = {
  items: [],
  iphones: []
};

function ItemsReducer(state = initState, action:any) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload.data,
      };

     case GET_IPHONE:
      return  {
      ...state,
      iphones: action.payload.data,
    }
    default:
      return state;
  }
}

export default ItemsReducer;
