import { TicketIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/free-solid-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function OrderSummary() {
  const {cartItems} = useSelector(state => state.cart); 
  const totalReducedCost = cartItems.reduce((acc, cart)=> acc + cart.amountByQuantity, 0 ); 
  const discount = totalReducedCost * (cartItems.length > 10 ? 0.1 : 0.05)
  const deliveryFee = 12; 



  return (
    <div className="mt-10 rounded-md border border-gray-300/50 p-2 shadow-lg shadow-gray-900/20 lg:mt-10">
      <div className="flex flex-col items-start justify-center rounded-md bg-white px-3 py-4 shadow">
        <p className="text-[14px] font-bold tracking-tight text-gray-900 capitalize">
          Order summary
        </p>
        <div className="mt-2 flex w-full items-center justify-between">
          <div className="relative w-7/10">
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-full rounded-full border-0 bg-gray-100 px-12 py-2 text-[14px] font-semibold tracking-wider text-gray-600 outline-0 placeholder:font-bold"
            />
            <TicketIcon className="absolute top-[50%] left-[6%] w-6 -translate-y-[50%]" />
          </div>
          <button className="flex w-30 cursor-pointer items-center justify-center rounded-full bg-gray-800 px-4 py-2 text-[14px] font-bold tracking-tight text-gray-300 capitalize shadow">
            Apply
          </button>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-4 divide-y divide-gray-400/50">
          <div className="mt-4 flex w-full flex-col gap-2 pb-4">
            <CostCart title="subtotal" price={totalReducedCost.toFixed(2)} />
            <CostCart
              title="discount "
              price={discount.toFixed(2)}
              color="text-red-600"
            />
            <CostCart title="delivery fee" price={deliveryFee} />
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-5">
            <CostCart title="Total" price={(totalReducedCost - discount + deliveryFee).toFixed(2)} total={true} />
            <ButtonCheckOut />
          </div>
        </div>
      </div>
    </div>
  );
}
function ButtonCheckOut() {
  return (
    <Link
      to={"shipping"}
      className="flex w-full cursor-pointer items-center justify-center gap-5 rounded-full bg-gray-900 p-2 text-gray-500 shadow"
    >
      <span className="font-semibold tracking-tighter text-gray-300 capitalize">
        checkout
      </span>
      {/* <FontAwesomeIcon icon={fa} /> */}
      <FontAwesomeIcon
        icon={faPaypal}
        className="text-[12px] font-bold text-gray-300"
      />
    </Link>
  );
}

function CostCart({ title, price, color, total }) {
  return (
    <div className="flex w-full items-center justify-between">
      <p
        className={`font-semibold tracking-tight text-gray-500 capitalize ${total ? "text-[14px] font-bold text-gray-800 " : ""}`}
      >
        {title}
      </p>
      <p
        className={`font-bold tracking-tight ${color ? color : "text-gray-600"} text-[16px] ${total ? "text-[2rem] font-bold" : ""}`}
      >
        ₵ {price}
      </p>
    </div>
  );
}
export default OrderSummary;
