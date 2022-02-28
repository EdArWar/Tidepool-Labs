import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AuthApi from "./API/AuthApi";
import AppHOC from "./components/hoc/AppHOC";
import PageRoutes from "./routes/PageRoutes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    !!localStorage.getItem("token") && dispatch(AuthApi.auth());
  }, []);

  return (
    <AppHOC>
      <PageRoutes />;
    </AppHOC>
  );
};

export default App;
