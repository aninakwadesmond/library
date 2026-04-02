import { Form, useSubmit } from "react-router-dom";
import BarNavigation from "../Components/BarNavigation";
import { useContext } from "react";
import { ShippingContext } from "../Context/ShippingContext";

function ShippingCard() {

//   const {handleSubmit, handleFormSubmit} = useContext(ShippingContext)
//  const submit =  useSubmit()

//  function handleDataToBeSubmitted(e){

//   const inputs = new FormData(e.target); 

//   console.log('input')

//   submit(inputs, {method:'post', action:'/cart/shipping'})

//  }
  return (
    <div className="mb-10 flex flex-col items-start justify-center gap-4 rounded-md bg-white p-4 shadow shadow-gray-950/10">
      <BarNavigation />
      <Header />
      {/* <Form className="w-full h-full flex-col-start gap-2" method="post" action="/cart/shipping" onSubmit={e=> handleDataToBeSubmitted(e)}> */}
      <div className="mt-5 grid grid-cols-2 gap-x-5">
        <Input_Address name="FirstName" placeholder="Stylish" />
        <Input_Address name="lastName" placeholder="Ben" />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-x-5">
        <Input_Address
          name="email"
          placeholder="aninakwahdesmond3@gmail.com"
          type="email"
        />
        <Input_Address name="phoneNumber" placeholder="0248490032" />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-x-5">
        <Input_Address name="city" placeholder="Sunyani" />
        <Input_Address name="state" placeholder="fiapre" />
        <Input_Address name="zipCode" placeholder="00223" />
      </div>
      <TextArea />
      <ShippingMethods />
    
      {/* </Form> */}
    </div>

  );
}

function ShippingMethods() {


  return (
    <div className="mt-5 flex w-full flex-col items-start justify-center gap-2">
      <h3 className="font-semibold tracking-tight text-gray-500 capitalize">
        shipping method
      </h3>
      <div className="mb-4 grid w-full grid-cols-2 gap-6">
        <Shipping_Method title="free shipping" duration="7-30 Days" price={0} name='radio-method'/>
        <Shipping_Method
          title="express shipping"
          duration="1-3 Days"
          price={9}
          bg="bg-orange-100"
          name='radio-method'
        />
      </div>
    </div>
  );
}

function Shipping_Method({ title, duration, price, bg, name}) {

    const {shippingType, setShippingType} = useContext(ShippingContext)
  return (
    <label htmlFor={title}
      className={`flex w-full items-center justify-between rounded-md border border-gray-100 p-2 shadow-lg shadow-gray-400/20 ${bg ? bg : ""}`}
    onClick={()=> setShippingType(title)}>
      <div className="flex h-3 w-3 flex-col items-center justify-center rounded-full border-2 border-gray-500 p-2">
        <input
          type="radio"
          name={name}
          id={title}
          value="a"
          className="h-2 w-2 rounded-full accent-gray-900"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-1">
        <p className="gap-1 text-[12px] font-bold tracking-tight text-gray-500 capitalize">
          {title}
        </p>
        <p className="text-[12px] font-semibold text-gray-300 capitalize">
          {duration}
        </p>
      </div>
      <p className="font-bold text-gray-600">${price}</p>
    </label>
  );
}

function TextArea() {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-1 pb-10">
      <p className="font-semibold tracking-tight text-gray-500 capitalize">
        Description
      </p>
      <textarea
        name="description"
        id=""
        className="pd-2 h-20 w-full resize-none rounded-md border border-gray-200 px-4 py-3 text-[14px] font-semibold tracking-wide text-gray-700 shadow-lg shadow-gray-300/50 outline-0 placeholder:text-[12px] placeholder:tracking-tight"
        placeholder="Enter description here....."
      />
    </div>
  );
}

function Input_Address({ name, placeholder, type }) {
  return (
    <div className="flex flex-col items-start justify-center gap-1">
      <label
        htmlFor="name"
        className="text-[12px] font-bold tracking-tight text-gray-400 capitalize"
      >
        {name}
      </label>
      <input
        type={type ? type : "text"}
        className="w-full rounded-md border border-gray-100 px-4 py-1 text-[14px] font-bold tracking-wide text-gray-500 shadow outline-0 placeholder:text-[11px] placeholder:tracking-tight"
        placeholder={placeholder}
        id="name"
        name={name}
      />
    </div>
  );
}

function Header() {
  return (
    <div className="w-full font-semibold tracking-tight text-gray-700 capitalize">
      Shipping Address
    </div>
  );
}

export default ShippingCard;
