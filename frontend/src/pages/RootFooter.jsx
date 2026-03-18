import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import ScrollTop from "../Components/ScrollTop";

function RootFooter() {
  return (
    <>
       <ScrollTop/>
      <Outlet />
      <Footer />
    </>
  );
}

export default RootFooter;
