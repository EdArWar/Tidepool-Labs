import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AuthApi from "./API/AuthApi";
import AlertMessage from "./components/alertMessage/AlertMessage";
import PageRoutes from "./routes/PageRoutes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    !!localStorage.getItem("token") && dispatch(AuthApi.auth());
  }, []);

  return (
    <AlertMessage>
      <PageRoutes />;
    </AlertMessage>
  );
};

export default App;
