import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { LoaderBooks } from "./pages/Home";
// import Details from "./pages/Details";
// import CartPage from "./pages/CartPage";
// import Shipping, { actionSendOrderDetails } from "./pages/Shipping";
// import UserDashBoard from "./pages/UserDashBoard";
// import Orders, { LoadOrderData } from "./pages/Orders";
// import Login_SignUp from "./pages/Login_SignUp";
import  { actionFormLogin } from "./pages/Login";
import  { actionSignUpUser } from "./pages/SignUp";
// import ForgetPassword from "./pages/ForgetPassword";
import { Provider } from "react-redux";
import store from "./store/store";
import RootFooter from "./pages/RootFooter";
// import Author, { LoadAuthorBooks } from "./pages/Author";
// import AudioPage, { LoadTextData } from "./pages/AudioPage";
// import ScrollTop from "./Components/ScrollTop";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingCard from "./Components/LoadingCard";
import ProtectedRoute from "./Components/ProtectedRoute";
import { validateToken } from "./Components/ValidateToken";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootFooter />,
    children: [
      { index: true, 
        // element: <Home />, loader: LoaderBooks,
        lazy:async () => {
          const module = await import('./pages/Home'); 
          return {
            Component:module.default, 
            loader:module.LoaderBooks
          }
        }
      },

      { path: "/author/:name",
        //  element: <Author />, loader: LoadAuthorBooks,
         lazy:async()=> {
        const module = await import('./pages/Author'); 
        return {
          Component:module.default, 
          loader:module.LoadAuthorBooks,
          action:module.NavigatePages
        }
      }},

      { path: "/details/:id", 
        // element: <Details />
        lazy:async()=> {
          const module = await import('./pages/Details'); 
          return {
            Component:module.default
          }
        }
       },
      { path: "/cart",
        //  element: <CartPage /> 
        lazy:async()=> {
          const module = await import('./pages/CartPage'); 
          return {
            Component:module.default
          }
        }
        },
      { path: "/cart/shipping", 
        // element: <Shipping /> , action:actionSendOrderDetails
        lazy:async()=> {
          const module = await import('./pages/Shipping')
          return {
            Component:module.default, 
            action:module.actionSendOrderDetails
            
          }
        }
      },
      { 
        // element:<ProtectedRoute/>,
        // children:[  
        //   { 
            path: "/dashboard",
        //  element: <UserDashBoard /> ,
          lazy:async()=> {
        const module = await import('./pages/UserDashBoard'); 

        //    await validateToken(); 
        // return {
        //   Component:module.default, 
        //   loader:module.LoadOrdersArrary
        // }
        return {
      Component: module.default,
      loader: async (args) => {
        await validateToken(); // ✅ ALWAYS runs
        return module.LoadOrdersArrary(args);
      },
    };
      } 
    // }]
  },
      { path: "/cart/order", 
        // element: <Orders />, loader:LoadOrderData
         lazy:async()=> {
        const module = await import('./pages/Orders'); 
        return {
          Component:module.default, 
          // loader:module.LoadOrderData
          loader:async(args)=> {
            await validateToken()
            return module.LoadOrderData(args)
          }
        }
      } },
    ],
  },

  { path: "/login_signup", 
    // element: <Login_SignUp />,
     lazy:async()=> {
    const module = await import('./pages/Login_SignUp'); 

    return {
      Component:module.default
    }
  } },
  { path: "/login",
    //  element: <Login />, action: actionFormLogin

    lazy:async()=> {
    const module = await import('./pages/Login'); 
    return {
      Component:module.default, 
      action:actionFormLogin
    }
   }}, 
  { path: "/signup", 
    // element: <SignUp />, action: actionSignUpUser 
    lazy:async()=> {
    const module = await import('./pages/SignUp'); 
    return {
      Component:module.default, 
      action:actionSignUpUser
    }
  }}, 
  { path: "", 
    // element: <ForgetPassword />
    children:[
      {path:'/forgetPassword',  lazy:async()=> {
    const module = await import('./pages/ForgetPassword'); 
    return {
      Component:module.default, 
      action:module.ResetPasswordByEmail
      // action:actionSignUpUser
    }
  } }, 
  {path:'/resetPassword', lazy:async()=> {
    const module = await import('./pages/Resetpassword'); 
    return {Component:module.default, action:module.ResetPasswordAction}
   }},
    ]
      
   },
    

  { path: "/audio", 
    // element: <AudioPage />, loader: LoadTextData
        lazy:async()=> {
    const module = await import('./pages/AudioPage'); 
    return {
      Component:module.default, 
      loader:module.LoadTextData, 
      // action:actionSignUpUser
    }
  }
   },
]);
function App() {
  return (
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <RouterProvider router={router}  fallbackElement={<LoadingCard/>}/>
    </Provider>
  );
}

export default App;
