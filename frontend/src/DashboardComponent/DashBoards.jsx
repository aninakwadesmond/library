import { faGooglePay } from "@fortawesome/free-brands-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faBasketShopping, faCarRear, faCheck, faTimes, faWallet } from "@fortawesome/free-solid-svg-icons"
import { use, useContext } from "react"
import { useSelector } from "react-redux"
import Dashboard_sideNav from "../usersDashboard/Dashboard_sideNav"
import UserNavigation from "../usersDashboard/UserNavigation"
import UserCard from "../usersDashboard/UserCard"
import Image_Content from "../usersDashboard/Image_Content"
import Wallet_Balance from "../usersDashboard/Wallet_Balance"
import Tickets from "../usersDashboard/Tickets"
import Table_Item from "../usersDashboard/Table_Item"
import Icon_text from "../usersDashboard/Icon_text"
import Last_Visit from "../Components/Last_Visit"
import { DashboardContext } from "../Context/DashbordContext"
import Button from "../DetailsComponent/Button"
import { Link } from "react-router-dom"

function DashBoards({orderedData}) {
  // console.log('loaded data', data); 
  const {data} = use(orderedData)
  const {orderedItems} = data
  console.log('resolved ordered Items', orderedItems); 
  // const {orderedItems} = data; 

 const {openModal} =  useContext(DashboardContext)
 const {cartItems} = useSelector(state => state.cart)
  return (
    <div className="grid w-full justify-items-center px-2 py-4 lg:grid-cols-9 lg:gap-x-2">
       
         <div className="justify-self-center lg:col-span-2  lg:block hidden" >
           <Dashboard_sideNav />
   
         </div>
         <div className="justify-self-center lg:col-span-2  lg:block " style={{display:openModal ?'block':'none'}}>
           <Dashboard_sideNav />
   
         </div>
       
         <div className="w-full lg:col-span-7">
           <div className="flex w-full flex-col items-start justify-center gap-5">
             <UserNavigation />
             <div className="mb-4 grid w-full grid-cols-2 gap-x-4 px-4 md:grid-cols-3">
               <UserCard
                 icon={faBasketShopping}
                 heading="cart"
                 actionList={["completion"]}
               >
                {!cartItems.length > 0  && <Link className='px-4 py-2 rounded-md shadow-md bg-orange-400 text-white font-semibold'>Order an Items</Link> }
                 {cartItems.length > 0 && cartItems.map((cart)=> <Image_Content name="Apple Watch pro 350" price={150} cart={cart}/>)}
                  {/* <Image_Content name="Apple Watch pro 350" price={150} /> 
                 <Image_Content name="Apple Watch pro 350" price={150} /> */}
               </UserCard>
               <UserCard
                 icon={faWallet}
                 heading="wallet"
                 actionList={["Add Credit", "completion"]}
               >
                 <Wallet_Balance />
               </UserCard>
               <UserCard
                 icon={faHeart}
                 heading="wishlist"
                 actionList={["See All", "Add to cart"]}
               >
                 {!cartItems.length > 0  && <Link className='px-4 py-2 rounded-md shadow-md bg-orange-400 text-white font-semibold'>no wishList</Link> }
                 {cartItems.length > 0 && cartItems.map((cart)=> <Image_Content name="Apple Watch pro 350" price={150} cart={cart}/>)}
                 {/* <Image_Content name="Apple Watch pro 350" price={150} /> */}
                 {/* <Image_Content name="Apple Watch pro 350" price={150} /> */}
               </UserCard>
             </div>
             <div className="flex w-full flex-col items-start justify-center gap-y-6 px-4">
               <Tickets
                 heading={[
                   { title: "w-40" },
                   { department: "w-30" },
                   { priority: "w-30" },
                   { date: "w-30" },
                   { ticket_number: "w-30" },
                   { status: "w-30" },
                 ]}
                 icon={faHeart}
                 head="Tickets"
                 bottom={["Send now", "See all"]}
                //  data= {data}
               >
                 {/* {orderedItems.map(order => <Table_Item>
                   <td className="max-w-30">
                     <p className="truncate pr-4 text-[13px]">
                       Problem with order package
                     </p>
                   </td>
                   <td className="text-[14px]">Delivery</td>
                   <td className="flex items-center justify-start gap-2">
                     <Icon_text
                       letter="a"
                       letter_text_color="text-red-200"
                       letter_bg_color="bg-red-500"
                       text="fast"
                       text_color="text-red-600"
                     />
                   </td>
                   <td className="text-[13px]">23/4/2023</td>
                   <td className="text-[12px]">4356</td>
                   <td>
                     <Icon_text
                       icon={faGooglePay}
                       letter_bg_color="bg-yellow-500"
                       letter_text_color="text-yellow-100"
                       text="waiting"
                       text_color="text-yellow-400"
                       text_size="text-[10px]"
                     />
                   </td>
                 </Table_Item>)} */}
                 
                 <Table_Item>
                   <td className="max-w-30 text-[13px]">
                     <p className="truncate pr-4"> Problem with order package</p>
                   </td>
                   <td className="text-[14px]">Delivery</td>
                   <td className="flex items-center justify-start gap-2">
                     <Icon_text
                       letter="b"
                       letter_text_color="text-yellow-200"
                       letter_bg_color="bg-yellow-500"
                       text="light"
                       text_color="text-yellow-600"
                     />
                   </td>
                   <td className="text-[13px]">23/4/2023</td>
                   <td className="text-[12px]">4356</td>
                   <td>
                     <Icon_text
                       icon={faCheck}
                       letter_bg_color="bg-green-500"
                       letter_text_color="text-green-100"
                       text="answered"
                       text_color="text-green-400"
                       text_size="text-[10px]"
                     />
                   </td>
                 </Table_Item>
                 <Table_Item>
                   <td className="max-w-30 text-[13px]">
                     <p className="truncate pr-4"> Problem with order package</p>
                   </td>
                   <td className="text-[14px]">Delivery</td>
                   <td className="flex items-center justify-start gap-2">
                     <Icon_text
                       letter="c"
                       letter_text_color="text-blue-200"
                       letter_bg_color="bg-blue-500"
                       text="normal"
                       text_color="text-blue-600"
                     />
                   </td>
                   <td className="text-[13px]">23/4/2023</td>
                   <td className="text-[12px]">4356</td>
                   <td>
                     <Icon_text
                       icon={faTimes}
                       letter_bg_color="bg-gray-500"
                       letter_text_color="text-gray-100"
                       text="closed"
                       text_color="text-gray-400"
                       text_size="text-[10px]"
                     />
                   </td>
                 </Table_Item>
               </Tickets>
               <Tickets
                 heading={[
                   { name: "w-50" },
                   { price: "w-20" },
                   { date: "w-30" },
                   { order_Number: "w-30" },
                   { status: "w-30" },
                 ]}
                 order="10"
                 icon={faBasketShopping}
                 head="Orders"
                 bottom={["Send now", "See all"]}
               >
                {orderedItems ? orderedItems.map(order=><Table_Item>
                   <td className="max-w-30">
                     <div className="flex w-full items-center justify-start gap-2">
                       <div className="h-10 w-13">
                         <img
                           src={`${order.image || order.formats['image/jpeg']}?default=false`}
                           onError={e=> e.target.src= 'images/image-0.jpg'}
                           alt="book image"
                           className="h-[90%] w-[90%]"
                         />
                       </div>
                       <p className="truncate pr-4 text-[11px]">{order.title}</p>
                     </div>
                   </td>
                   <td
                     className="text-[12px] tracking-tight text-green-500"
                     style={{ color: "greenyellow" }}
                   >
                     {order.totalCost} $
                   </td>
                   <td className="text-gray text-[13px]">23/4/2023</td>
                   <td className="text-gray text-[13px] truncate">{order._id}</td>
   
                   <td>
                     <Icon_text
                       icon={faGooglePay}
                       letter_bg_color="bg-yellow-500"
                       letter_text_color="text-yellow-100"
                       text="Pending Action"
                       text_color="text-yellow-400"
                       text_size="text-[10px]"
                     />
                   </td>
                 </Table_Item> ):<Table_Item>
                   <td className="max-w-30">
                     <div className="flex w-full items-center justify-start gap-2">
                       <div className="h-10 w-13">
                         <img
                           src={`images/image-0.jpg`}
                           onError={e=> e.target.src= 'images/image-0.jpg'}
                           alt="book image"
                           className="h-[90%] w-[90%]"
                         />
                       </div>
                       <p className="truncate pr-4 text-[11px]">{'No items ordered'}</p>
                     </div>
                   </td>
                   <td
                     className="text-[12px] tracking-tight text-green-500"
                     style={{ color: "greenyellow" }}
                   >
                     {11} $
                   </td>
                   <td className="text-gray text-[13px]">23/4/2023</td>
                   <td className="text-gray text-[13px] truncate">{1232}</td>
   
                   <td>
                     <Icon_text
                       icon={faGooglePay}
                       letter_bg_color="bg-yellow-500"
                       letter_text_color="text-yellow-100"
                       text="Pending Action"
                       text_color="text-yellow-400"
                       text_size="text-[10px]"
                     />
                   </td>
                 </Table_Item>}
                 
                 
               </Tickets>
               <Last_Visit />
             </div>
           </div>
         </div>
       </div>
  )
}

export default DashBoards
