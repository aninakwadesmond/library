import { TicketIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";
import { ShippingContext } from "../Context/ShippingContext";
import { useSelector } from "react-redux";
import { server } from "../Axios/api";
import { useSubmit } from "react-router-dom";

function PayCart() {
  const { cartItems } = useSelector((state) => state.cart);

  const totalReducedCost = cartItems.reduce(
    (acc, cart) => acc + cart.amountByQuantity,
    0,
  );
  const taxes = totalReducedCost * (cartItems.length > 10 ? 0.11 : 0.053);
  const deliveryFee = 12;

  return (
    <div className=".thin-y-scrollbar .thin-scrollbar mb-10 flex w-full flex-col items-start justify-center gap-5 border border-gray-100 p-3 shadow-md shadow-gray-950/20">
      <Title_cart />
      <div className="flex-col-start .thin-y-scrollbar .thin-scrollbar my-auto h-40 w-full gap-4 overflow-auto pt-10">
        {cartItems.map((cart) => (
          <Cart_Items_Order
            title="Mens Top Black Puffed Jacket"
            category="men's black"
            price={990.0}
            cart={cart}
          />
        ))}
      </div>
      <DiscountCode />
      <div className="flex w-full flex-col items-start justify-center gap-1 border-b border-gray-300/80 pb-2">
        <Price_Tax
          title="Subtotal"
          price={totalReducedCost.toFixed(2)}
          textColor="text-gray-900 "
        />
        <Price_Tax
          title="Shipping"
          price={deliveryFee.toFixed(2)}
          textColor="text-gray-400 text-[13px]"
        />
        <Price_Tax
          title="Estimated taxes"
          price={taxes.toFixed(2)}
          textColor="text-gray-400 text-[13px]"
        />
      </div>
      <div className="flex w-full flex-col items-start justify-center gap-6">
        <Price_Tax
          title="Total"
          price={(totalReducedCost + deliveryFee + taxes).toFixed(2)}
          textColor="text-gray-900 text-[1.3rem]"
          total={true}
        />
        <Button_Payment />
      </div>
    </div>
  );
}

function Button_Payment() {
  // const {handleSubmit} = useContext(ShippingContext)

  // const {cartItems} = useSelector(state => state.cart)

  // const {setItemsCredentials} = useContext(ShippingContext)

  //   const itemsCredentials = cartItems.map(cart => {
  //     return {id:cart.id , qunatity:cart.quantity, totalCost:cart.amountByQuantity}
  //   })    ;
  //  const [startPayment, setStartPayment] =  useState(false)
  //  const submit = useSubmit()

  //  async function handleSubmitCredentials(e){
  //   console.log('events', e);
  // const credentials = new FormData(e.target);
  // credentials.append('orderedItems', JSON.stringify(itemsCredentials));

  // submit(credentials, {method:'post', action:'/cart/shipping'})
  //  }

  async function MakePayment() {
    // handleSubmitCredentials(e)
    // if(startPayment)

    try {
      console.log("beginning to access the server");
      const { data } = await server.post("/order/pay", { amount: 20 });
      console.log("payment succesful", data);

      //redirection user to paystack checkout
      window.location.href = data.authorization_url;
    } catch (error) {
      throw new Response(JSON.stringify(error?.message), { status: 300 });
    }
  }

  // if (!startPayment) return;
  // MakePayment();
  // setStartPayment(prev => !prev); //warining calling state update in a useEffect can cause multiple rerendering

  return (
    <button className="flex w-full cursor-pointer flex-col items-center justify-center rounded-md bg-gray-900 p-3 font-bold text-gray-300 shadow-md">
      Continue to Payment
    </button>
  );
}

function Price_Tax({ title, price, textColor, total }) {
  return (
    <div className="flex w-full items-center justify-between">
      <p
        className={`font-bold tracking-tight text-gray-500 ${total ? "text-[1.3rem] text-gray-900" : ""}`}
      >
        {title}
      </p>
      <p className={`font-bold tracking-normal ${textColor ? textColor : ""}`}>
        ₵ {price}
      </p>
    </div>
  );
}

function DiscountCode() {
  return (
    <div className="relative w-full">
      <span className="absolute top-[50%] left-[2%] -translate-y-[50%]">
        <TicketIcon className="w-5 text-gray-400" />
      </span>
      <input
        type="text"
        className="w-full rounded-md border border-gray-200 px-15 py-2 text-[1.1rem] font-bold tracking-wider text-gray-600 shadow-md outline-0 placeholder:text-[16px] placeholder:font-semibold placeholder:text-gray-400/70"
        placeholder="Discount code"
      />
      <button className="absolute top-[50%] right-[2%] -translate-y-[50%] cursor-pointer border-0 text-[14px] font-bold tracking-tight text-gray-800 capitalize">
        apply
      </button>
    </div>
  );
}

function Cart_Items_Order({ category, price, cart }) {
  const { formats, title, bookshelves, quantity } = cart;
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex max-h-30 w-2/3 items-center justify-start gap-3">
        <div className="max-h-auto relative w-1/4">
          <img
            src={`${formats["image/jpeg"]}?default=false`}
            onError={(e) => (e.src = "/images/image-1.jpeg")}
            alt="book image"
            className="h-full w-full rounded-md"
          />
          <span className="absolute -top-2 -right-2 flex h-4 w-4 flex-col items-center justify-center rounded-full bg-linear-to-r from-blue-900 to-green-200 p-3 font-bold text-gray-200">
            {quantity}
          </span>
        </div>
        <div className="flex flex-col items-start justify-center gap-1">
          <h6 className="line-clamp-1 text-[14px] font-bold tracking-tight text-gray-600 capitalize">
            {title}
          </h6>
          <p className="line-clamp-1 text-[10px] font-bold tracking-tight text-gray-400 capitalize">
            {bookshelves[0]?.split(":")?.pop() || category};
          </p>
        </div>
      </div>
      <h3 className="font-bold tracking-tight text-gray-700">
        ${`${((cart.download_count / 1000) * 2 || 10).toFixed(2) * 1}`}
      </h3>
    </div>
  );
}

function Title_cart() {
  return (
    <h3 className="w-full text-[15px] font-bold tracking-tight text-gray-600">
      Your cart
    </h3>
  );
}

export default PayCart;
