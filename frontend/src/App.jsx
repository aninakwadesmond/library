import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import CartPage from "./pages/CartPage";
import Shipping from "./pages/Shipping";
import UserDashBoard from "./pages/UserDashBoard";
import Orders from "./pages/Orders";
import Login_SignUp from "./pages/Login_SignUp";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import { Provider } from "react-redux";
import store from "./store/store";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/details/:id", element: <Details /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/cart/shipping", element: <Shipping /> },
  { path: "/dashboard", element: <UserDashBoard /> },
  { path: "/cart/order", element: <Orders /> },
  { path: "/login_signup", element: <Login_SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/forgetPassword", element: <ForgetPassword /> },
]);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
