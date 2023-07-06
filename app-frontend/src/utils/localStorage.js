const readToken = () => {
  return localStorage.getItem(
    process.env.REACT_APP_LOCALSTORAGE_TOKEN_LOCATION || "token"
  );
};

const saveToken = (token) => {
  localStorage.setItem(
    process.env.REACT_APP_LOCALSTORAGE_TOKEN_LOCATION || "token",
    token
  );
};

export { saveToken, readToken };
