import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

function RootFooter() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default RootFooter;
