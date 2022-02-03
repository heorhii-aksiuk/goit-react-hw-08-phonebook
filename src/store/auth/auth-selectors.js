export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
