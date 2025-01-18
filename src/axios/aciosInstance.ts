import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: "https://orecipesapi.onrender.com/api/",
})

export const addTokenToInstance = (token: string) => {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const removeTokenFromInstance = () => {
    axiosInstance.defaults.headers.common.Authorization = ""
}