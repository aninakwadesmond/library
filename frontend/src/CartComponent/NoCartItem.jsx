import { faBasketShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function NoCartItem() {
  return (
    <div className="bg-white rounded-md w-full flex-placecenter gap-y-5 mt-10 py-5 shadow-lg">
      <div className="flex-placecenter w-30 h-30 rounded-full bg-silver p-1">
        <div className="w-[90%] h-[90%]">
          <img src="/images/image-0.jpg" alt="image of a kid reading book"  className="w-full h-full object-center rounded-md  rotate-6"/>
        </div>
      </div>
      <div className="flex-placecenter gap-2">
        <h4 className="font-bold text-gray-600 tracking-normal text-[1.4rem]">Your cart is empty !</h4>
        <p className="font-semibold text-gray-500 tracking-tight">
          Browse our categories and discover our books
        </p>
        <Link to={'/'} className="w-40 text-center py-2 px-3 tracking-tight font-semibold capitalize rounded-md shadow-md text-orange-100 bg-orange-500 mt-5 cursor-pointer duration-400 transition hover:bg-orange">Start shopping</Link>
      </div>
      
    </div>
  )
}

export default NoCartItem
