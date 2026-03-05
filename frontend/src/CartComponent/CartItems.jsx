import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TrashIcon } from "@heroicons/react/24/solid";

function CartItems() {
  return (
    <div className="mt-4 w-full rounded-md border border-gray-200 p-2 shadow-lg shadow-gray-900/20">
      <div className="flex w-full flex-col items-start justify-center gap-y-10 divide-y-2 divide-amber-100 rounded-md bg-white p-2 shadow">
        <SingleCart />
        <SingleCart />
        <SingleCart />
      </div>
    </div>
  );
}

function SingleCart() {
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-3 pb-5 md:flex-nowrap md:gap-0">
      <div className="flex items-center justify-start gap-3">
        <div className="bg-silver-300 flex h-27 w-35 flex-col items-center justify-center rounded-md bg-gray-400/30">
          <img
            src="/designs/book.jpg"
            alt="book Image"
            className="max-h-[90%] max-w-[80%]"
          />
        </div>
        <div className="flex h-25 flex-col items-start justify-between">
          <div className="flex flex-col items-start justify-center">
            <p className="line-clamp-1 max-w-full text-[13px] font-bold tracking-wide text-gray-600 capitalize">
              The hope from the sky
            </p>
            <span className="text-[11px] font-semibold text-gray-300">
              version: 2
            </span>
            <span className="text-[12px] font-semibold text-gray-300">
              genre: motivation
            </span>
          </div>
          <div className="mt-auto max-w-full text-[14px] font-bold tracking-wide text-gray-900/80 capitalize">
            $145.00
          </div>
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-between md:h-25 md:w-auto md:flex-col md:items-end">
        <TrashIcon className="w-5 cursor-pointer text-red-400 shadow" />
        <FontAwesomeIcon
          icon={faHeart}
          className="cursor-pointer text-orange-300 shadow"
        />
        <InputQuantity />
      </div>
    </div>
  );
}

function InputQuantity() {
  return (
    <div className="flex items-center justify-start gap-1">
      <Increment_Decrement icon={faMinus} />
      <input
        type="number"
        defaultValue={1}
        className="w-15 rounded-md px-3 py-px font-bold text-gray-400 shadow outline-0"
      />
      <Increment_Decrement icon={faPlus} />
    </div>
  );
}

function Increment_Decrement({ icon }) {
  return (
    <button className="flex w-6 cursor-pointer flex-col items-center justify-center rounded-md bg-orange-500 p-1 shadow">
      <FontAwesomeIcon icon={icon} className="font-bold text-orange-50" />
    </button>
  );
}

export default CartItems;
