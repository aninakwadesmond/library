import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BookOpenIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartNavigation({path='/cart'}) {
 const {cartItems}= useSelector(state => state.cart)
  return (
    <div className="item-center flex w-full justify-between">
      <div className="flex items-center justify-start gap-1">
        <Link to={path}>
        <FontAwesomeIcon icon={faArrowLeft}  className="text-[2rem] font-bold text-gray-900 cursor-pointer "/>
        </Link>
        <BookOpenIcon className="w-8 text-green-400" />
        <span className="text-[1.5rem] font-bold tracking-wide text-green-400">
          ook
        </span>
      </div>
      <div className="flex items-center justify-start gap-2 pr-2">
        <FontAwesomeIcon icon={faHeart} className="text-[1.2rem]" />
        <div className="relative order-2">
          <ShoppingCartIcon className="w-6 text-orange" />
          {cartItems.length > 0 && <span className="absolute -top-2 -right-2 flex h-5 w-5 flex-col items-center justify-center rounded-full bg-red-200 p-1 text-center text-[12px] font-bold text-gray-50">
            {cartItems.length}
          </span> }
          
        </div>
        <Link className="order-1" to='/signup'>
          <UserCircleIcon className="w-6 text-green-400" />
        </Link>
      </div>
    </div>
  );
}

export default CartNavigation;
