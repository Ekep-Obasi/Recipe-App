import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCurrentUser } from "../api/api";
import NotFound from "../components/pages/not-found/NotFound";

const AuthGuard = ({ children }) => {
  const { pathname } = useLocation();
  const [error, setError] = useState({
    errorCode: 401,
    message: "UnAuthorized",
  });
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getCurrentUser()
      .then(({ data }) => {
        console.log(data);
        setCurrentUser(data);
      })
      .catch(() => {
        setError(500);
      });
  }, [pathname]);

  currentUser ? (
    <children />
  ) : (
    <NotFound errorCode={error.errorCode} message={error.message} />
  );
};

export default AuthGuard;
