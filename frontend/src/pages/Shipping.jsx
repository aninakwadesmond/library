import { useState } from "react";
import CartNavigation from "../CartComponent/CartNavigation";
import { ShippingContext } from "../Context/ShippingContext";
import PayCart from "../Shipping/PayCart";
import ShippingNavigation from "../Shipping/ShippingNavigation";
import { Form, useSubmit } from "react-router-dom";
import { server } from "../Axios/api";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function Shipping() {
  const [shippingType, setShippingType] = useState("");
  // const [itemsCredentials, setItemsCredentials] = useState();

  const { cartItems } = useSelector((state) => state.cart);
  const itemsCredentials = cartItems.map((cart) => {
    return {
      id: cart.id,
      quantity: cart.quantity,
      totalCost: cart.amountByQuantity,
      title: cart.title,
      formats: cart.formats,
      category: cart.bookshelves[0]?.split(":")?.pop(),
    };
  });

  // function handleSubmit(event){
  //   setHandleFormSubmit(event)
  // }

  const submit = useSubmit();
  function handleOnSubmit(e) {
    console.log(e.target);

    const inputWithoutShippingType = new FormData(e.target);

    inputWithoutShippingType.append("shippingType", shippingType);
    inputWithoutShippingType.append(
      "orderedItems",
      JSON.stringify(itemsCredentials),
    );
    submit(inputWithoutShippingType, {
      method: "post",
      action: "/cart/shipping",
    });
  }
  //   async function handleSubmitCredentials(e){
  //   console.log('events', e);
  // const credentials = new FormData(e.target);
  // credentials.append('orderedItems', JSON.stringify(itemsCredentials));

  // submit(credentials, {method:'post', action:'/cart/shipping'})
  //  }
  return (
    <ShippingContext.Provider value={{ shippingType, setShippingType }}>
      <div className="flex h-full w-full flex-col items-start justify-center gap-3 p-4">
        <CartNavigation />
        <Form
          className="grid w-full lg:grid-cols-3 lg:gap-x-6"
          onSubmit={(e) => handleOnSubmit(e)}
          // method="post"
        >
          <div className="lg:col-span-2">
            <ShippingNavigation />
          </div>
          <div className="max-h-max">
            <PayCart />
          </div>
        </Form>
      </div>
    </ShippingContext.Provider>
  );
}

async function MakePayment(e) {
  // handleSubmitCredentials(e)
  // if(startPayment)
  // try {
  //   console.log('beginning to access the server');
  //   const {data} =  await server.post('/order/pay', {amount:20})
  //   console.log('payment succesful', data)
  //   //redirection user to paystack checkout
  //   window.location.href = data.authorization_url
  // } catch (error) {
  //   throw new Response(JSON.stringify(error?.message), {status:300})
  // }
}

export async function actionSendOrderDetails({ request, params }) {
  const response = await request.formData();
  console.log("response", response);
  const data = Object.fromEntries(response.entries());
  const { email, lastName: fullName, description } = data;
  console.log("action started", response, data);
  // const {} = data;
  const shippingAddress = {
    city: data.city,
    state: data.state,
    zipCode: data.zipCode,
    shippingType: data.shippingType,
    phoneNumber: data.phoneNumber,
  };

  const orderedItems = data.orderedItems;

  console.log("orederd data", orderedItems);

  // if(typeof orderedItems == 'string'){
  //   orderedItems = JSON.parse(orderedItems)
  // }

  console.log("prepared Input", shippingAddress, orderedItems, data);

  try {
    const response = await server.post("/order", {
      email,
      fullName,
      description,
      shippingAddress,
      orderedItems,
    });
    toast.success(response.data.message);
    try {
      const { data } = await server.post("/order/pay", {
        amount: 300,
      });
      console.log("payment succesful", data);

      //redirection user to paystack checkout
      window.location.href = data.authorization_url;
    } catch (error) {
      throw new Response(JSON.stringify(error?.message), { status: 500 });
    }
  } catch (error) {
    toast.error(
      error || error?.response || error?.message || "Cannot Proceed with order",
    );
    throw new Response(
      JSON.stringify(error?.message || "Cannot Proceed with order"),
      { status: 404 },
    );
  }
}

export default Shipping;
