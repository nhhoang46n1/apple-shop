

export const ADD_ITEM = "ADD_ITEM";

export const addItem:any = (payload:any) => {
    console.log(payload);
    return {
        type: ADD_ITEM,
        payload,
    }
} 