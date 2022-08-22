export const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
export const isLogin = () => {
  return !!sessionStorage.getItem('user');
};
export const userInfo = () => {
  const sessionUser = sessionStorage.getItem('user');
  return sessionUser ? JSON.parse(sessionUser) : null;
};

export const deleteUserSession = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
};
