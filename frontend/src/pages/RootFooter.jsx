import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import ScrollTop from "../Components/ScrollTop";

function RootFooter() {
  return (
    <div className="w-full h-full">
       <ScrollTop/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootFooter;
