import {
  faAlarmClock,
  faFolder,
  faHeart,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCarSide,
  faChevronRight,
  faExclamationTriangle,
  faPencilRuler,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BookOpenIcon,
  ChevronRightIcon,
  CircleStackIcon,
  KeyIcon,
  PlayCircleIcon,
  UserCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { openNav } from "../store/Feautures/Navigation_store";
import { Link, redirect, useNavigate } from "react-router-dom";
import { setChatHome } from "../store/Feautures/ChatSlice";
import { useEffect } from "react";
import { server } from "../Axios/api";
import { toast } from "react-toastify";

function SideNavigation() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  function handleCloseNav() {
    dispatch(openNav());
  }

  function handleOpenChatHome(){
    console.log('click chat')
    dispatch(setChatHome(true))
  }


    async function handleLogout(){
      console.log('start logout')
      try {
        const {data } = await server.post('/user/logout'); 
        toast.success(data.message); 

        if(data.status === 309){
          console.log('server data ', data)
           toast.error('Not logged in 409'); 
          return redirect('/login_signup'); 
        }

      } catch (error) {
        toast.error('Not logged in'); 
        navigate('/login_signup'); 

        //  redirect('/login_signup'); 
        // throw new Response(JSON.stringify(error?.message))
      }
    }

  return (
    <div className="">
      <div className="absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full bg-gray-300/20 lg:relative "></div>

      <div className="fixed top-0 left-0 z-10 h-full w-1/2 bg-white px-5 pt-5 lg:relative lg:w-full">
        <div className="flex w-full items-center justify-between">
          <div className="flex">
            <BookOpenIcon className="w-10 text-green-500" />
            <span className="text-[25px] font-bold text-green-500 uppercase">
              ook
            </span>
          </div>
          <button
            className="cursor-pointer border-0 p-1 outline-0 xl:hidden"
            onClick={handleCloseNav}
          >
            <XCircleIcon className="w-8 text-red-400" />
          </button>
        </div>
        <Activities heading="Recouces">
          <Resource icon={faFolder} name="Dashboard" path='/dashboard'/>
          <Resource icon={faCarSide} name=" orders" path='/cart/order' />
          <Resource icon={faAlarmClock} name="cart"  path='/cart'/>
          <Resource icon={faHeart} name="wishlist" path='/' />
        </Activities>
        <Activities heading="My Account">
          <Resource icon={faUserCircle} name="log in"  path='/signup'/>
          <Resource icon={faUserCircle} name="sign up" path='/login' />
          <Resource icon={faUserCircle} name="reset password" path='/forgetPassword'/>
          <Resource icon={faPencilRuler} name="chat " path='/' handler={handleOpenChatHome}/>
          <Resource icon={faExclamationTriangle} name="Log out"  handler={handleLogout} path='/'/>
          {/* <Resource icon={faHeart} name="Recommended " /> */}
        </Activities>

        <div className="bottom-0 left-0 mt-10 flex h-40 w-full flex-col content-center items-center justify-center rounded-md bg-orange-100/50 shadow-lg shadow-orange-200/70">
          <div className="max-h-[80%] w-2/3 text-center">
            <img
              src="/designs/book.jpg"
              alt=""
              className="h-full w-full rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Resource({ icon, name , path='', handler=''}) {
  return (

    <Link to={path} className="group flex w-full cursor-pointer items-center justify-start gap-2 rounded-md p-2 hover:bg-red-200" onClick={handler?handler:null}>
      <span className="opacity-0 group-hover:opacity-100" >
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-[12px] font-bold group-hover:text-red-500"
        />
      </span>

      <FontAwesomeIcon icon={icon} className="group-hover:text-red-500" />
      <span className="text-sm font-semibold tracking-tight text-gray-900/70 group-hover:text-red-500">
        {name}
      </span>
    </Link>

    


    // // {handler}
    // <Link to={path} className="group flex w-full cursor-pointer items-center justify-start gap-2 rounded-md p-2 hover:bg-red-200">
    //   <span className="opacity-0 group-hover:opacity-100" onClick={handler?handler:null}>
    //     <FontAwesomeIcon
    //       icon={faChevronRight}
    //       className="text-[12px] font-bold group-hover:text-red-500"
    //     />
    //   </span>

    //   <FontAwesomeIcon icon={icon} className="group-hover:text-red-500" />
    //   <span className="text-sm font-semibold tracking-tight text-gray-900/70 group-hover:text-red-500">
    //     {name}
    //   </span>
    // </Link>
  );
}

function Activities({ heading, children }) {
  return (
    <div className="mt-10 flex flex-col items-start justify-center gap-3">
      <div className="item-start flex w-full flex-col justify-center gap-2">
        <p className="text-[11px] font-semibold tracking-tight text-gray-900/50 capitalize">
          {heading}
        </p>
        {children}
      </div>
    </div>
  );
}
export default SideNavigation;
