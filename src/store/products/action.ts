import itemsApi from "../../api/itemsApi";

export const GET_ITEMS = "GET_ITEMS";
export const GET_IPHONE = "GET_IPHONE";

export const getItemsAsync:any = (url:string) =>{
  return async (dispatch: any) => {
    try {
      const res = await itemsApi.getAll(url);
      dispatch({
        type: GET_ITEMS,
        payload: {
          data: res.data,
        },
      });
    } catch (error:any) {
      return error.message;
    }
  };
}

export const getIphone:any= (URL:string, id:string) => {
  return async (dispatch: any) => {
    try {
      const res = await itemsApi.get(URL, id);
      dispatch({
        type: GET_IPHONE,
        payload: {
          data: res.data,
        },
      });
    } catch (error:any) {
      return error.message;
    }
  }
}


