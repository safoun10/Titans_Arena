import { useContext } from "react";
import { AuthContext } from "../Contexts/Provider/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
