import { TicketIcon } from "@heroicons/react/24/solid";

function PayCart() {
  return (
    <div className="mb-10 flex w-full flex-col items-start justify-center gap-5 border border-gray-100 p-3 shadow-md shadow-gray-950/20">
      <Title_cart />
      <div className="flex w-full flex-col items-start justify-center gap-4">
        <Cart_Items_Order
          title="Mens Top Black Puffed Jacket"
          category="men's black"
          price={990.0}
        />
        <Cart_Items_Order
          title="women jacket"
          category="women top "
          price={1200.0}
        />
      </div>
      <DiscountCode />
      <div className="flex w-full flex-col items-start justify-center gap-1 border-b border-gray-300/80 pb-2">
        <Price_Tax title="Subtotal" price={2199.0} textColor="text-gray-900 " />
        <Price_Tax
          title="Shipping"
          price={9.0}
          textColor="text-gray-400 text-[13px]"
        />
        <Price_Tax
          title="Estimated taxes"
          price={5.0}
          textColor="text-gray-400 text-[13px]"
        />
      </div>
      <div className="flex w-full flex-col items-start justify-center gap-6">
        <Price_Tax
          title="Total"
          price={2213.0}
          textColor="text-gray-900 text-[1.3rem]"
          total={true}
        />
        <Button_Payment />
      </div>
    </div>
  );
}

function Button_Payment() {
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
        ${price}
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

function Cart_Items_Order({ title, category, price }) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex max-h-30 w-2/3 items-center justify-start gap-3">
        <div className="relative h-full w-1/4">
          <img
            src="/designs/book.jpg"
            alt="book image"
            className="h-full w-full rounded-md"
          />
          <span className="absolute -top-2 -right-2 flex h-4 w-4 flex-col items-center justify-center rounded-full bg-gray-900/80 font-bold text-gray-200">
            1
          </span>
        </div>
        <div className="flex flex-col items-start justify-center gap-1">
          <h6 className="line-clamp-1 text-[14px] font-bold tracking-tight text-gray-600 capitalize">
            {title}
          </h6>
          <p className="line-clamp-1 text-[10px] font-bold tracking-tight text-gray-400 capitalize">
            {category}
          </p>
        </div>
      </div>
      <h3 className="font-bold tracking-tight text-gray-700">${price}</h3>
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
