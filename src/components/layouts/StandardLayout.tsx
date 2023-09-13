import { Outlet } from "react-router-dom";
import AuthUser from "../../services/AuthUser";
import Header from "../Header";
import HeaderAuth from "../HeaderAuth";
import Footer from "../Footer";

const StandardLayout = () => {
  const { getToken } = AuthUser();

  return (
    <>
      {!getToken() ? <Header /> : <HeaderAuth />}
      <Outlet />
      <Footer />
    </>
  );
};

export default StandardLayout;
