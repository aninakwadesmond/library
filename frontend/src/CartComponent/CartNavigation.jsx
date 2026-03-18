import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BookOpenIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

function CartNavigation() {
 const {cartItems}= useSelector(state => state.cart)
  return (
    <div className="item-center flex w-full justify-between">
      <div className="flex items-center justify-start gap-1">
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
        <div className="order-1">
          <UserCircleIcon className="w-6 text-green-400" />
        </div>
      </div>
    </div>
  );
}

export default CartNavigation;
