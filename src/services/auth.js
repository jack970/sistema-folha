export const TOKEN_KEY = "@IPASC-Token";
export const REFRESH_KEY = "@REFRESH-Token";
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null && sessionStorage.getItem(REFRESH_KEY) !== null;
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);
export const getRefresh = () =>  sessionStorage.getItem(REFRESH_KEY)
export const login = (token, refreshToken) => {
  sessionStorage.setItem(TOKEN_KEY, token);
  sessionStorage.setItem(REFRESH_KEY, refreshToken);
};
export const logout = () => {
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(REFRESH_KEY);
};