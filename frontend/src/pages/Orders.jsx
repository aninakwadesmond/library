import { useEffect, useState } from "react";
import NavigationOrder from "../Orders/NavigationOrder";
import OrderCard from "../Orders/OrderCard";
import OrderHeader from "../Orders/OrderHeader";
import RightNavigation from "../Orders/RightNavigation";
import SingleCard from "../Orders/SingleCard";
import Summary from "../Orders/Summary";
import { server } from "../Axios/api";
import { Link, useLoaderData } from "react-router-dom";

function Orders() {

  //one the orderPage load i verify payment by calling my paymentApi
  const [orderpaid, setOrderPaid] = useState([]); 

  const {data} = useLoaderData()
  console.log('loader data', data)
  console.log('data oredred items', data); 

  useEffect(()=> {
    async function verifyPaymentFromServer(){
    const params = new URLSearchParams(window.location.search); 
    const reference = params.get('reference'); 
    console.log('params ', params, 'reference ', reference);

    const {data} = await server.post('/order/verify', {reference})
    console.log('this is the response upon verification', data )
    setOrderPaid(true); 
     
    }
    verifyPaymentFromServer()
  }, [])





  return (
    <div className="flex w-full flex-col items-start justify-center gap-5 px-3 py-5">
      <div className="flex w-full flex-col items-start justify-center gap-y-10">
        <NavigationOrder data = {data} />
        <OrderHeader data= {data} />
      </div>

      <div className="w-full grid-cols-7 justify-items-center gap-4 md:grid">
        <div className="col-span-5 w-full">
          <div className="flex w-full flex-col items-start justify-center gap-3">
            <div className="flex w-full flex-col items-start justify-center gap-y-10">
              <OrderCard
                title=" Order items"
                status="undefined"
                status_style=" bg-red-200  text-red-700/80"
                bottom={{
                  text: " Effortlessly manage your orders with our intuitive Order List page.",
                  button1: "Fullfill item",
                  button2: "Create shipping label",
                }}
              >
                {data?.orderedItems?.map(data=><SingleCard
                  name="custom notebook"
                  price={20.0}
                  category="Brown/85/Gold"
                  quantity={1}
                  image="/images/kids_read.jpeg"
                  data= {data}
                /> )}

                {!data && <Link to={'/'} className="px-4 py-2 rounded-md bg-orange-400 shadow-md text-md font-semibold tracking-normal text-white">Order an item</Link>}
                
                {/* <SingleCard
                  name="custom T-shirt"
                  price={10.0}
                  category="Orange/flowers"
                  quantity={1}
                  image="/images/image-1.jpeg"
                  s
                /> */}
              </OrderCard>
              <OrderCard
                title=" Order summary"
                status="Payment pending"
                status_style=" bg-yellow-200  text-yellow-700/80"
                bottom={{
                  text: " Review your order at a glance on the Order Summary page.",
                  button1: "Send invoice",
                  button2: "Collect payment",
                }}
              >
                <div className="w-full pb-4">
                  <Summary price={30.0} title="subtotal" message="2 item" />
                  <Summary
                    price={-2.0}
                    title="discount"
                    message="New customer"
                  />
                  <Summary price={0} title="shipping" message="Free shipping" />
                </div>
                <div className="mt-5 flex w-full flex-col items-center justify-start gap-2">
                  <Summary price={28.0} title="Total" s_style="text-gray-800" />
                  <Summary price={28.0} title="Paid by customer" />
                  <Summary
                    edit={true}
                    title="Payment due when invoice is sent"
                  />
                </div>
              </OrderCard>
            </div>
          </div>
        </div>
        <div className="col-span-2 w-full">
          <RightNavigation data={data}/>
        </div>
      </div>
    </div>
  );
}


export async function  LoadOrderData(){
try {
  const response  =  await server.get('/order/me')
  return response

} catch (error) {
  throw new Response(JSON.stringify(error?.message), {status:404})
}
}
export default Orders;
