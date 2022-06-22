import axiosClient from "./axiosClient";

const itemsApi = {
  getAll(url:string) {
    // const url = "/iphone";
    return axiosClient.get(url);
  },

  get(URL:string, id:string) {
    const url = `${URL}?id=${id}`;
    return axiosClient.get(url)
  }
};

export default itemsApi;
