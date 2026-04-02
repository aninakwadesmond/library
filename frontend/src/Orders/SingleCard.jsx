import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SingleCard({ name, price,  image , data}) {
  console.log('data', data); 

  // const {email, fullName , orderedItems, shippingAddress} = data; 
  const {category, formats, id, quantity, title, totalCost} = data
  return (
    <div className="flex w-full items-center justify-between pb-3">
      <div className="flex items-center justify-start gap-x-2">
        <div className="flex h-20 w-20 flex-col items-center justify-center">
          <img
            src={formats['image/jpeg'] || image}
            alt="book image"
            className="h-[90%] w-[90%] rounded-md"
          />
        </div>
        <div className="flex h-20 flex-col items-start justify-start gap-y-2">
          <p className="text-[14px] font-semibold tracking-tight text-gray-500 capitalize">
            {title}
          </p>
          <p className="text-[15px] font-bold tracking-normal text-gray-700">
            ₵ {(totalCost/quantity).toFixed(2)}
          </p>
          <p className="text-[13px] font-semibold text-gray-300 capitalize">
            {category}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-2 md:flex-row">
        <input
          type="number"
          className="order-3 w-20 rounded-md border-0 px-2 py-1 font-bold text-gray-500 shadow-md outline-0 md:order-0"
          defaultValue={quantity}
        />
        <span className="font-bold tracking-normal text-gray-700">₵ {totalCost.toFixed(2)}</span>
        <span className="-order-1 flex flex-col items-center justify-center md:order-1 md:pl-4">
          <FontAwesomeIcon
            icon={faTrashCan}
            className="cursor-pointer text-[13px] text-gray-400 transition duration-300 hover:scale-125 hover:text-red-300 md:order-2"
          />
        </span>
      </div>
    </div>
  );
}
export default SingleCard;
