import axiosClient from "./axiosClient";

const iphonesApi = {
  getAll(url:string, params:string) {
    // const url = "/iphone";
    return axiosClient.get(url);
  },
};

export default iphonesApi;
