import handleError from "../configs/axiosError";
import { axiosInstance } from "../configs/axiosInstance";


export const getRequest = async (url) => {
    try {
        const res = await axiosInstance.get(`${url}`, );
        return res;
    } catch (error) {
        return handleError(error);
    }
};

export const postRequest = async (url, payload) => {
    try {
        const res = await axiosInstance.post(`${url}`, payload);
        return res;
    } catch (error) {
        return handleError(error);
    }
};

// todo: PUT
export const putRequest = async (url, payload) => {
    try {
        const res = await axiosInstance.put(`${url}`, payload);
        return res;
    } catch (error) {
        return handleError(error);
    }
};

// todo: DELETE
export const deleteRequest = async (url) => {
    try {
        const res = axiosInstance.delete(`${url}`);
        return res;
    } catch (error) {
        return handleError(error);
    }
};

// todo: PATCH
export const patchRequest = async (url, payload) => {
    try {
        const res = axiosInstance.patch(`${url}`, payload);
        return res;
    } catch (error) {
        return handleError(error);
    }
};
