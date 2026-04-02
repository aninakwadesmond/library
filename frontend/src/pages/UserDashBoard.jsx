import {
  faBasketShopping,
  faCarRear,
  faCheck,
  faNavicon,
  faTimes,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import UserCard from "../usersDashboard/UserCard";
import UserNavigation from "../usersDashboard/UserNavigation";
import Image_Content from "../usersDashboard/Image_Content";
import { TicketIcon, WalletIcon } from "@heroicons/react/24/solid";
import Wallet_Balance from "../usersDashboard/Wallet_Balance";
import Tickets from "../usersDashboard/Tickets";
import Table_Item from "../usersDashboard/Table_Item";
import Icon_text from "../usersDashboard/Icon_text";
import { faGooglePay } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Last_Visit from "../Components/Last_Visit";
import Dashboard_sideNav from "../usersDashboard/Dashboard_sideNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Suspense, useState } from "react";
import { DashboardContext } from "../Context/DashbordContext";
import { useSelector } from "react-redux";
import { server } from "../Axios/api";
import { redirect, useLoaderData } from "react-router-dom";
import LoadingCard from "../Components/LoadingCard";
import DashBoards from "../DashboardComponent/DashBoards";
import { toast } from "react-toastify";

function UserDashBoard() {
    const [openModal, setOpenModal] = useState(false); 

  function handleOpenModal(){
    setOpenModal(true)
  }

  function handleCloseModal(){
    setOpenModal(false)
  }

  const {cartItems} = useSelector(state => state.cart); 

  const {orders:data} = useLoaderData(); 

  console.log('data no dashboard', data)
  return (
    // <Dashboa></Dashboa>
    <Suspense fallback={<div className="w-screen max-h-[1/2] grid grid-cols-2 items-center justify-items-center gap-4 mt-5">
      {Array.from({length: 6}, (_, i)=> <LoadingCard/>)}
    </div>}>
    <DashboardContext.Provider value={{openModal, setOpenModal, handleOpenModal, handleCloseModal, data}}>
      {/* {const ordersArray = use(data)} */}
      

  
   <DashBoards orderedData={data}/>
      </DashboardContext.Provider>
      </Suspense>
  );
}

async function LoadOrderArrary(){
  try {
    const response = await server.get('/order/me'); 

    console.log('response from loader', response)
    return response; 
  } catch (error) {
    toast.error('login to view dashboard'); 
    // return redirect('/login_signup'); 
    throw new Response(JSON.stringify(error || error?.message, {status:400}))
  }
}

export async function LoadOrdersArrary(){
  return {
    orders:LoadOrderArrary()
  }
}

export default UserDashBoard;
