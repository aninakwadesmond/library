import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuantity } from "../store/Feautures/Details";
import {
  removeCartItem,
  updateCartQuantity,
} from "../store/Feautures/CartSlice";

function CartItems() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="mt-4 w-full rounded-md border border-gray-200 p-2 shadow-lg shadow-gray-900/20">
      <div className="flex w-full flex-col items-start justify-center gap-y-10 divide-y-2 divide-amber-100 rounded-md bg-white p-2 shadow">
        {cartItems.map((cart) => (
          <SingleCart cart={cart} />
        ))}
        {/* <SingleCart />
        <SingleCart />
        <SingleCart /> */}
      </div>
    </div>
  );
}

function SingleCart({ cart }) {
  console.log("cart", cart);

  const dispatch = useDispatch();

  function handleRemoveItem() {
    console.log("before removed", cart);
    dispatch(removeCartItem(cart));
    console.log("removed", cart);
  }

  const { title, download_count, formats, languages, bookshelves } = cart;
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-3 pb-5 md:flex-nowrap md:gap-0">
      <div className="flex items-center justify-start gap-3">
        <div className="bg-silver-300 flex h-27 w-35 flex-col items-center justify-center rounded-md bg-gray-400/30">
          <img
            src={`${formats["image/jpeg"]}?default=false`}
            onError={(e) => (e.target.src = "/designs/book.jpg")}
            alt="book Image"
            className="h-[90%] w-[80%]"
          />
        </div>
        <div className="flex h-25 flex-col items-start justify-between">
          <div className="flex flex-col items-start justify-center">
            <p className="line-clamp-1 max-w-full text-[13px] font-bold tracking-wide text-gray-600 capitalize">
              {title}
            </p>
            <span className="text-[11px] font-semibold text-gray-300">
              languages: 'en , fr'
            </span>
            <span className="text-[12px] font-semibold text-gray-300">
              category: {bookshelves[0]?.split(":")?.pop() || "Books"}
            </span>
          </div>
          <div className="mt-auto max-w-full text-[14px] font-bold tracking-wide text-gray-900/80 capitalize">
            ₵ {((download_count / 1000) * 2).toFixed(2)}
          </div>
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-between md:h-25 md:w-auto md:flex-col md:items-end">
        <TrashIcon
          className="w-5 cursor-pointer text-red-400 shadow"
          onClick={handleRemoveItem}
        />
        <FontAwesomeIcon
          icon={faHeart}
          className="cursor-pointer text-orange-300 shadow"
        />
        <InputQuantity cart={cart} />
      </div>
    </div>
  );
}

function InputQuantity({ cart }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  console.log("allquantity", quantity);

  function handleIncrement() {
    setQuantity((prev) => {
      const newQty = prev + 1;
      dispatch(
        updateCartQuantity({
          id: cart.id,
          quantity: newQty,
          amountByQuantity:
            ((cart.download_count / 1000) * 2 || 10).toFixed(2) * newQty,
        }),
      );
      return newQty;
    });

    // cart.quantity = quantity;
  }

  function handleDecrement() {
    if (quantity === 1) return;

    //inside the updaet get current value and sipatch
    setQuantity((prev) => {
      const newQty = prev - 1;
      dispatch(
        updateCartQuantity({
          id: cart.id,
          quantity: newQty,
          amountByQuantity:
            ((cart.download_count / 1000) * 2 || 10).toFixed(2) * newQty,
        }),
      );
      return newQty;
    });
  }

  function handleOnChange(e) {
    if (!e.target.value > 0) return;
    setQuantity((e) => {
      const newQty = e.target.value;
      dispatch(
        updateCartQuantity({
          id: cart.id,
          quantity: newQty,
          amountByQuantity:
            ((cart.download_count / 1000) * 2 || 10).toFixed(2) *
            Number(newQty),
        }),
      );

      return Number(newQty);
    });
  }

  //doing it the wrong way by updating the objext itself
  // function handleIncrement(){

  // }
  return (
    <div className="flex items-center justify-start gap-1">
      <Increment_Decrement icon={faMinus} action={handleDecrement} />
      <input
        type="number"
        // defaultValue={quantity}
        value={quantity}
        className="w-15 rounded-md px-3 py-px font-bold text-gray-400 shadow outline-0"
        onChange={(e) => handleOnChange(e)}
      />
      <Increment_Decrement icon={faPlus} action={handleIncrement} />
    </div>
  );
}

function Increment_Decrement({ icon, action }) {
  return (
    <button
      className="flex w-6 cursor-pointer flex-col items-center justify-center rounded-md bg-orange-500 p-1 shadow"
      onClick={action}
    >
      <FontAwesomeIcon icon={icon} className="font-bold text-orange-50" />
    </button>
  );
}

export default CartItems;
