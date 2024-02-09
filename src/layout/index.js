import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components/index";
import "./style.css";
const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
