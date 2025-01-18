export const saveTokenToLocalStorage = (token: string) => {
    localStorage.setItem("token", token);
};
export const getTokenFromLocalStorage = () => {
    return localStorage.getItem("token");
};
export const removeTokenFromLocalstorage = () => {
    localStorage.removeItem("token");
};